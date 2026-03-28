import { useMemo, useRef, useState } from "react";
import {
  Heart,
  ShieldPlus,
  Smartphone,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// const API_BASE_URL = "https://your-backend-domain.com/api";
// for local/ngrok testing, example:
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// const API_BASE_URL = "/api";
const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

export default function DonateNow() {
  const presets = useMemo(
    () => [
      { amount: 500, label: "Starter Gift", impact: "Supports basic first aid response" },
      { amount: 1000, label: "Support Gift", impact: "Helps community outreach efforts" },
      { amount: 2500, label: "Care Gift", impact: "Supports emergency preparedness" },
      { amount: 5000, label: "Impact Gift", impact: "Strengthens life-saving response" },
      { amount: 10000, label: "Leadership Gift", impact: "Enables wider operational support" },
      { amount: 25000, label: "Major Gift", impact: "Expands high-impact emergency capacity" },
    ],
    []
  );

  const [selectedAmount, setSelectedAmount] = useState(5000);
  const [customAmount, setCustomAmount] = useState("5000");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [apiMessage, setApiMessage] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [donationId, setDonationId] = useState(null);
  const navigate = useNavigate();

  const pollIntervalRef = useRef(null);

  const formatKES = (value) =>
    new Intl.NumberFormat("en-KE").format(Number(value || 0));

  const handlePresetClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(String(amount));
  };

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, "");
    setCustomAmount(value);
    setSelectedAmount(Number(value) || null);
  };

  const stopPolling = () => {
    if (pollIntervalRef.current) {
      clearInterval(pollIntervalRef.current);
      pollIntervalRef.current = null;
    }
  };

 const pollDonationStatus = (id) => {
  stopPolling();

  pollIntervalRef.current = setInterval(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/donations/${id}/status`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        return;
      }

      const data = await response.json();
      const status = data.status || "";

      setPaymentStatus(status);

      if (status === "paid") {
        setApiMessage(`Donation received successfully. Receipt: ${data.receipt || "-"}`);
        stopPolling();

        setTimeout(() => {
          navigate(`/donate/thank-you/${id}`);
        }, 1200);
      }

      if (status === "failed") {
        setApiMessage(data.result_desc || "Payment failed or was cancelled.");
        stopPolling();
      }
    } catch (error) {
      console.error("Polling error:", error);
    }
  }, 5000);
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    setApiMessage("");
    setPaymentStatus("");
    setDonationId(null);
    stopPolling();

    if (!customAmount || Number(customAmount) < 1) {
      setApiMessage("Please enter a valid donation amount.");
      return;
    }

    if (!phone.trim()) {
      setApiMessage("Please enter your mobile number.");
      return;
    }

    try {
      setIsSubmitting(true);

      const payload = {
        amount: Number(customAmount),
        phone,
        donor_name: fullName || null,
        reference: "DONATION",
        description: "St John Ambulance Kenya Donation",
      };

      const response = await fetch(`${API_BASE_URL}/donations/stk-push`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to initiate donation.");
      }

      setDonationId(data.donation_id);
      setPaymentStatus(data.status || "requested");
      setApiMessage(
        data.message || "STK Push sent. Please check your phone and complete payment."
      );

      if (data.donation_id) {
        pollDonationStatus(data.donation_id);
      }
    } catch (error) {
      console.error(error);
      setApiMessage(error.message || "Something went wrong while initiating donation.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-950 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid xl:grid-cols-2 gap-10 items-start">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 bg-white dark:bg-gray-900 border-l-4 border-yellow-500 shadow-sm px-4 py-3">
              <Heart className="w-5 h-5 text-red-600" />
              <span className="text-sm md:text-base font-bold tracking-wide text-gray-900 dark:text-white uppercase">
                St John Ambulance Kenya
              </span>
            </div>

            <div>
              <p className="text-green-700 dark:text-green-400 font-semibold uppercase tracking-[0.2em] text-sm mb-4">
                Save Lives Through Giving
              </p>

              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
                Give with purpose.
                <span className="block text-green-700 dark:text-green-400">
                  Strengthen emergency response.
                </span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-2xl">
                Your support helps St John Ambulance Kenya deliver first aid,
                emergency response, training, and humanitarian assistance where it
                is needed most.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-5 border border-gray-200 dark:border-gray-800">
                <div className="w-11 h-11 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                  <ShieldPlus className="w-5 h-5 text-green-700 dark:text-green-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  Trusted Humanitarian Impact
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Your gift supports preparedness, training, and emergency care in
                  communities across Kenya.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-5 border border-gray-200 dark:border-gray-800">
                <div className="w-11 h-11 rounded-full bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center mb-4">
                  <Smartphone className="w-5 h-5 text-yellow-600" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  Easy M-Pesa Giving
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Enter your amount and number, then confirm the STK Push on your phone.
                </p>
              </div>
            </div>

            <div className="bg-green-700 text-white rounded-3xl shadow-xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 border-t-[20px] border-r-[20px] border-yellow-400 opacity-30" />

              <p className="text-yellow-300 font-semibold uppercase tracking-[0.2em] text-xs md:text-sm">
                Leadership Giving
              </p>

              <h2 className="mt-3 text-2xl md:text-3xl font-bold leading-tight">
                Larger gifts create wider, deeper impact.
              </h2>

              <p className="mt-4 text-green-50 leading-relaxed">
                Higher-value contributions can help strengthen emergency readiness,
                response capacity, training outreach, and operational support in a
                much bigger way.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Preparedness and emergency response support",
                  "Community first aid training capacity",
                  "Operational reinforcement for life-saving work",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-300 mt-0.5 shrink-0" />
                    <span className="text-sm md:text-base text-green-50">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-yellow-500 hidden sm:block" />

            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="bg-gray-900 dark:bg-black px-6 md:px-8 py-6 border-b border-gray-800">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Make a Donation
                </h2>
                <p className="text-gray-300 mt-2 text-sm md:text-base">
                  Choose an amount, enter your mobile number, and receive an M-Pesa STK Push.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <label className="text-sm font-bold uppercase tracking-wide text-gray-700 dark:text-gray-200">
                      Select Donation Amount
                    </label>
                    <span className="text-sm text-green-700 dark:text-green-400 font-semibold">
                      KES {formatKES(customAmount)}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {presets.map((item) => {
                      const active = Number(customAmount) === item.amount;

                      return (
                        <button
                          key={item.amount}
                          type="button"
                          onClick={() => handlePresetClick(item.amount)}
                          className={[
                            "text-left rounded-2xl border-2 p-4 transition-all duration-200",
                            active
                              ? "border-green-700 bg-green-50 dark:bg-green-900/20 shadow-md scale-[1.01]"
                              : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 hover:border-green-500 hover:shadow-md",
                          ].join(" ")}
                        >
                          <div className="text-lg md:text-xl font-extrabold text-gray-900 dark:text-white">
                            KES {formatKES(item.amount)}
                          </div>
                          <div className="text-xs font-semibold uppercase tracking-wide mt-1 text-green-700 dark:text-green-400">
                            {item.label}
                          </div>
                          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                            {item.impact}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="amount"
                    className="block text-sm font-bold uppercase tracking-wide text-gray-700 dark:text-gray-200 mb-3"
                  >
                    Or Enter Custom Amount
                  </label>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-base">
                      KES
                    </span>

                    <input
                      id="amount"
                      type="text"
                      inputMode="numeric"
                      value={customAmount}
                      onChange={handleAmountChange}
                      placeholder="Enter amount"
                      className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white pl-16 pr-4 py-4 text-lg font-semibold outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700"
                    />
                  </div>

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    You can tap a suggested amount and still edit it to any figure you wish.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold uppercase tracking-wide text-gray-700 dark:text-gray-200 mb-3"
                  >
                    M-Pesa Mobile Number
                  </label>

                  <input
                    id="phone"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 2547XXXXXXXX"
                    className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white px-4 py-4 outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700"
                  />

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Use the phone number that will receive the STK Push request.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-bold uppercase tracking-wide text-gray-700 dark:text-gray-200 mb-3"
                  >
                    Full Name <span className="normal-case text-gray-400">(Optional)</span>
                  </label>

                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white px-4 py-4 outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700"
                  />
                </div>

                {apiMessage && (
                  <div
                    className={`rounded-2xl p-4 text-sm font-medium ${
                      paymentStatus === "paid"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : paymentStatus === "failed"
                        ? "bg-red-50 text-red-800 border border-red-200"
                        : "bg-yellow-50 text-yellow-800 border border-yellow-200"
                    }`}
                  >
                    <p>{apiMessage}</p>

                    {paymentStatus && (
                      <p className="mt-1">
                        Status: <span className="font-bold uppercase">{paymentStatus}</span>
                      </p>
                    )}

                    {donationId && (
                      <p className="mt-1 text-xs opacity-80">
                        Donation Ref: {donationId}
                      </p>
                    )}
                  </div>
                )}

                <div className="rounded-2xl border border-yellow-200 dark:border-yellow-700/40 bg-yellow-50 dark:bg-yellow-900/10 p-5">
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    Considering a larger contribution?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    Leadership and major gifts make it possible to support broader
                    response readiness, outreach, training, and emergency support at scale.
                  </p>
                </div>

                <div className="space-y-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-green-700 hover:bg-green-800 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-lg py-4 px-6 transition-all shadow-lg hover:shadow-xl"
                  >
                    <span>{isSubmitting ? "Processing..." : "Request STK Push"}</span>
                    {!isSubmitting && <ChevronRight className="w-5 h-5" />}
                  </button>

                  <p className="text-center text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                    You will receive an M-Pesa prompt on your phone to complete the donation securely.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}