import { FC } from "react";
import { motion } from "framer-motion";

const ComingSoon: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative flex h-full w-full flex-col items-center justify-center rounded-lg bg-gradient-to-br from-red-900/30 to-blue-900/30 p-6 text-center backdrop-blur-sm"
    >
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-100">Something Exciting is Coming</h3>
        <p className="text-gray-600">Stay tuned for something special.</p>
        <div className="flex justify-center">
          <div className="animate-pulse text-blue-400">
            <span className="mr-1">●</span>
            <span className="mr-1 animate-pulse delay-150">●</span>
            <span className="animate-pulse delay-300">●</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ComingSoon;
