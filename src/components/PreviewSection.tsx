import { motion } from "framer-motion";
import { useState } from "react";

import medGuardVideo from "../assets/med_guard_demo_video.mp4";
import chatBotVideo from "../assets/chat_bot_demo_video.mp4";

const previews = [
  {
    title: "Med Guard",
    subtitle: "Offline-First Medicine Reminder Application",
    video: medGuardVideo,
  },
  {
    title: "AI Chat Bot",
    subtitle: "Flutter AI Assistant with Real-Time Conversations",
    video: chatBotVideo,
  },
];

const PreviewSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section
      id="projectpreview"
      className="py-24 md:py-32 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-primary font-medium">
            Product Showcase
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-5 leading-tight">
            Project Preview
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mt-6 leading-relaxed">
            Interactive preview of scalable mobile applications focused on
            offline-first architecture, AI integration, and production-ready usability.
          </p>

        </div>

        <div className="flex flex-wrap justify-center gap-16">

          {previews.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setActiveVideo(project.video)}
            >

              <div className="relative">

                <div className="absolute inset-0 bg-primary/20 blur-[120px] opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

                <div className="relative w-[320px] h-[650px] bg-black rounded-[48px] border-[10px] border-neutral-800 shadow-[0_25px_100px_rgba(0,0,0,0.55)] overflow-hidden">

                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-full z-20 border border-white/5" />

                  <video
                    src={project.video}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                  />

                </div>

              </div>

              <div className="text-center mt-8">

                <h3 className="text-3xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-base text-muted-foreground">
                  {project.subtitle}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

        {activeVideo && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 px-4"
            onClick={() => setActiveVideo(null)}
          >

            <div
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >

              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-14 right-0 text-white/70 hover:text-white transition-colors text-sm md:text-base"
              >
                Close
              </button>

              <video
                src={activeVideo}
                controls
                autoPlay
                className="w-[380px] md:w-[520px] rounded-[36px] shadow-[0_20px_100px_rgba(0,0,0,0.7)] border border-white/10"
              />

            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default PreviewSection;