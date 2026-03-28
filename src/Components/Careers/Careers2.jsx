import React, { useEffect, useMemo, useState } from "react";

const Careers2 = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [error, setError] = useState("");

  const API_BASE = "https://api.stjohnkenya.org";
//   const API_BASE = "http://127.0.0.1:8000/api";

  useEffect(() => {
    // console.log('hi');
  const fetchCareers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_BASE}/opportunities/careers`, {
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const parsed = await response.json();

      console.log("API response:", parsed);

      setCareers(Array.isArray(parsed) ? parsed : []);
    } catch (err) {
      console.error(err);
      setError(err.message || "Error fetching careers");
    } finally {
      setLoading(false);
    }
  };

  fetchCareers();
}, []);

  const sortedCareers = useMemo(() => {
    return [...careers].sort((a, b) => {
      if (a.is_featured && !b.is_featured) return -1;
      if (!a.is_featured && b.is_featured) return 1;
      return new Date(b.posting_date) - new Date(a.posting_date);
    });
  }, [careers]);

  const openCareer = async (career) => {
    try {
      setError("");

      const response = await fetch(`${API_BASE}/opportunities/careers/${career.slug}`, {
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to load career details.");
      }

      const data = await response.json();
      setSelectedCareer(data);
    } catch (err) {
      setError(err.message || "Could not load career details.");
    }
  };

  const closeCareer = () => {
    setSelectedCareer(null);
  };

  const formatDate = (date) => {
    if (!date) return "-";
    const parsed = new Date(date);
    if (Number.isNaN(parsed.getTime())) return date;

    return parsed.toLocaleDateString("en-KE", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getApplyLink = (career) => {
    if (!career) return null;

    if (career.application_link) {
      return career.application_link;
    }

    if (career.application_email) {
      const subject = encodeURIComponent(`Application for ${career.title}`);
      return `mailto:${career.application_email}?subject=${subject}`;
    }

    return null;
  };

  return (
    <section className="bg-gray-100 dark:bg-black py-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-semibold underline bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-yellow-400 mb-4">
            Careers
          </h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Explore current opportunities at St John Ambulance Kenya and join a
            mission-driven team making impact in communities.
          </p>
        </div>

        {loading && (
          <div className="text-center py-16">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Loading careers...
            </p>
          </div>
        )}

        {!loading && error && (
          <div className="max-w-2xl mx-auto mb-8 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {!loading && !error && sortedCareers.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              No career openings available at the moment.
            </p>
          </div>
        )}

        {!loading && sortedCareers.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {sortedCareers.map((career) => (
              <div
                key={career.id}
                className="relative h-[260px] sm:h-[290px] md:h-[340px] overflow-hidden group rounded-md shadow-md bg-gray-300"
              >
                <img
                  src={
                    career.image_url ||
                    "https://via.placeholder.com/800x600?text=Career+Opening"
                  }
                  alt={career.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/60 transition"></div>

                <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
                  {career.is_featured ? (
                    <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  ) : null}

                  {career.employment_type ? (
                    <span className="bg-white/90 text-black text-xs font-semibold px-3 py-1 rounded-full">
                      {career.employment_type.replaceAll("_", " ")}
                    </span>
                  ) : null}
                </div>

                <div className="absolute inset-0 flex items-end justify-center p-3 sm:p-6">
                  <div className="bg-sjak_secondary dark:bg-dark_bg p-4 sm:p-5 md:p-6 max-w-[95%] shadow-lg rounded-sm w-full">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-sjak_secondary mb-2">
                      {career.title}
                    </h3>

                    <p className="text-xs sm:text-sm md:text-base text-black dark:text-white mb-2">
                      {career.department || "General"}{" "}
                      {career.location ? `• ${career.location}` : ""}
                    </p>

                    <p className="text-xs sm:text-sm md:text-base text-black dark:text-white mb-4 line-clamp-3">
                      {career.summary || "Click below to view this career opening."}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="text-xs sm:text-sm text-black dark:text-white">
                        <span className="font-semibold">Closing:</span>{" "}
                        {formatDate(career.closing_date)}
                      </div>

                      <button
                        onClick={() => openCareer(career)}
                        className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full text-xs sm:text-sm font-semibold hover:scale-105 transition"
                      >
                        View Career +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedCareer && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-neutral-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl relative">
            <button
              onClick={closeCareer}
              className="absolute top-4 right-4 bg-black text-white dark:bg-white dark:text-black w-10 h-10 rounded-full font-bold"
            >
              ×
            </button>

            {selectedCareer.image_url && (
              <img
                src={selectedCareer.image_url}
                alt={selectedCareer.title}
                className="w-full h-[220px] sm:h-[300px] object-cover rounded-t-xl"
              />
            )}

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedCareer.employment_type && (
                  <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {selectedCareer.employment_type.replaceAll("_", " ")}
                  </span>
                )}

                {selectedCareer.department && (
                  <span className="bg-gray-200 text-black text-xs font-semibold px-3 py-1 rounded-full">
                    {selectedCareer.department}
                  </span>
                )}

                {selectedCareer.location && (
                  <span className="bg-gray-200 text-black text-xs font-semibold px-3 py-1 rounded-full">
                    {selectedCareer.location}
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-4">
                {selectedCareer.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm">
                <div className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-lg">
                  <p className="font-semibold text-black dark:text-white">
                    Posting Date
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {formatDate(selectedCareer.posting_date)}
                  </p>
                </div>

                <div className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-lg">
                  <p className="font-semibold text-black dark:text-white">
                    Closing Date
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {formatDate(selectedCareer.closing_date)}
                  </p>
                </div>
              </div>

              {selectedCareer.summary && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                    Summary
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-7">
                    {selectedCareer.summary}
                  </p>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                  Job Description
                </h3>
                <div
                  className="text-gray-700 dark:text-gray-300 leading-7 prose max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: selectedCareer.description || "<p>No description available.</p>",
                  }}
                />
              </div>

              <div className="flex flex-wrap gap-3">
                {getApplyLink(selectedCareer) && (
                  <a
                    href={getApplyLink(selectedCareer)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-full font-semibold transition"
                  >
                    Apply Now
                  </a>
                )}

                <button
                  onClick={closeCareer}
                  className="bg-black text-white dark:bg-white dark:text-black px-5 py-3 rounded-full font-semibold transition"
                >
                  Close
                </button>
              </div>

              {!getApplyLink(selectedCareer) && (
                <p className="mt-4 text-sm text-red-600">
                  No application method has been provided for this job.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Careers2;