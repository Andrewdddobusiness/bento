"use client";
import Grid from "@/components/grid";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen p-24">
      <div className="absolute inset-x-0 left-0 right-0 mx-auto max-w-[1600px] ">
        <motion.div
          key="22"
          initial={{ opacity: 0 }} // Initial opacity before animation
          animate={{ opacity: 1 }} // Opacity when animation completes
          transition={{ duration: 0.5 }} // Animation duration and delay
        >
          <div className="flex flex-col items-center justify-center text-center">
            <div className={"text-8xl text-yellow_p"}>Bento Box</div>

            <div className={"text-xl mb-5 text-red_p text-center"}>
              By: Andrew Do
            </div>
          </div>
        </motion.div>
        <Grid />
        <div className="flex flex-col items-center justify-center px-5 text-ali">
          <div className={"text-xl my-10 text-yellow_p text-center"}>
            "An unconventional portfolio of works."
          </div>
        </div>
      </div>
    </main>
  );
}
