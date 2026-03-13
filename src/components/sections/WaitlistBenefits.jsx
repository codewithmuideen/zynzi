import { CheckCircle } from "lucide-react";
import { WAITLIST_TITLE, WAITLIST_FEATURES, IMAGES } from "../../constants";

export default function WaitlistBenefits() {
  return (
    <section className="bg-[#F5F6F8] py-24">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-10">

          <h2 className="text-4xl md:text-5xl font-bold text-[#0F1C35]">
            {WAITLIST_TITLE}
          </h2>

          <div className="space-y-6">

            {WAITLIST_FEATURES.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">

                <CheckCircle
                  size={22}
                  className="text-green-500 mt-1 flex-shrink-0"
                />

                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature}
                </p>

              </div>
            ))}

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">

          <img
            src={IMAGES.App0}
            alt="App preview"
            className="w-full max-w-md object-contain"
          />

        </div>

      </div>

    </section>
  );
}