import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CheckCircle2, Download } from "lucide-react";

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// const API_BASE_URL = "/api";
const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

export default function DonationThankYou() {
  const { donationId } = useParams();
  const [donation, setDonation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDonation = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/donations/${donationId}/status`, {
          headers: {
            Accept: "application/json",
          },
        });

        const data = await response.json();
        setDonation(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadDonation();
  }, [donationId]);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg font-semibold text-gray-700">Loading your donation receipt...</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
        <div className="bg-green-700 text-white px-8 py-10 text-center">
          <CheckCircle2 className="w-14 h-14 mx-auto mb-4 text-yellow-300" />
          <h1 className="text-3xl md:text-4xl font-extrabold">Thank You for Your Gift</h1>
          <p className="mt-3 text-green-50 text-base">
            Your donation has been received successfully.
          </p>
        </div>

        <div className="p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-gray-200 p-4">
              <p className="text-xs uppercase text-gray-500 font-bold">Donation ID</p>
              <p className="text-lg font-semibold text-gray-900">{donation?.id || "-"}</p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-4">
              <p className="text-xs uppercase text-gray-500 font-bold">Status</p>
              <p className="text-lg font-semibold text-green-700 uppercase">{donation?.status || "-"}</p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-4">
              <p className="text-xs uppercase text-gray-500 font-bold">Amount</p>
              <p className="text-lg font-semibold text-gray-900">
                KES {new Intl.NumberFormat("en-KE").format(Number(donation?.amount || 0))}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-4">
              <p className="text-xs uppercase text-gray-500 font-bold">Receipt Number</p>
              <p className="text-lg font-semibold text-gray-900">{donation?.receipt || "-"}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-yellow-50 border border-yellow-200 p-5">
            <p className="text-gray-800 leading-relaxed">
              Thank you for supporting St John Ambulance Kenya. Your gift helps strengthen emergency response,
              training, and humanitarian support where it is needed most.
            </p>
          </div>

          <a
  href={`${BACKEND_BASE_URL}/donations/${donationId}/gift-card`}
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center gap-2 rounded-2xl bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-4"
>
  <Download className="w-5 h-5" />
  Download Gift Card
</a>
        </div>
      </div>
    </section>
  );
}