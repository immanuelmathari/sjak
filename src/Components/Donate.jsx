export default function Donate() {

  const items = [
    {
      emoji: "❤️",
      title: "Donate",
      primary: "Donate Now",
      secondary: "Give Donation",
    },
    {
      emoji: "🙋",
      title: "Volunteer",
      primary: "Join Volunteers",
      secondary: "Learn More",
    },
    {
      emoji: "🧰",
      title: "Get Supplies",
      primary: "Request Supplies",
      secondary: "View Catalogue",
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <span className="bg-yellow-500 px-6 py-3 text-3xl font-bold text-black">
            Support Our Work
          </span>
        </div>

        {/* Responsive layout */}
        <div className="grid gap-10 md:grid-cols-3">

          {items.map((item, index) => (
            <div
              key={index}
              className="
              group
              bg-white dark:bg-gray-800
              p-10
              rounded-lg
              shadow-md
              hover:shadow-xl
              text-center
              transition
              relative
              "
            >

              {/* Corner Accent */}
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-4 border-l-4 border-yellow-500"></div>

              {/* Emoji */}
              <div className="text-5xl mb-5">
                {item.emoji}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8">
                {item.title.toUpperCase()}
              </h3>

              {/* CTAs */}
              <div className="space-y-3">

                {/* Primary CTA */}
                <button className="
                  w-full
                  bg-green-600
                  text-white
                  font-semibold
                  py-3
                  rounded
                  transition
                  group-hover:bg-green-700
                  group-hover:scale-105
                ">
                  {item.primary}
                </button>

                {/* Secondary CTA */}
                <button className="
                  w-full
                  text-gray-600
                  dark:text-gray-300
                  font-semibold
                  transition
                  group-hover:opacity-70
                ">
                  {item.secondary}
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}