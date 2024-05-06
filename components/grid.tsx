"use client";

import React, { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
// import "react-grid-layout/css/styles.css";
import "./styles.css";
// import "react-resizable/css/styles.css";
import { motion } from "framer-motion";

import Map from "@/components/map";
import YouTubeVideo from "./youtube/youtubeVideo";
import Subs from "./youtube/subs";
import LinkedInIcon from "@/components/icons/linkedinIcon";
import XIcon from "@/components/icons/xIcon";
import GithubIcon from "@/components/icons/githubIcon";
import InstagramIcon from "@/components/icons/instagramIcon";
import Buildtopia from "@/components/projects/buildtopia";
import Headstart from "@/components/projects/headstart";

import DarkModeSwitch from "./darkMode/darkMode";
import Email from "./email/email";
import EmailModal from "./email/modal";
import Profile from "./profile/profile";

const ResponsiveGridLayout = WidthProvider(Responsive);

interface MyResponsiveGridProps {}

const MyResponsiveGrid: React.FC<MyResponsiveGridProps> = () => {
  const [layouts, setLayouts] = useState<Record<string, any[]>>({
    lg: [
      { i: "1", x: 0, y: 0, w: 2, h: 4 },
      { i: "2", x: 0, y: 0, w: 2, h: 2 },
      { i: "3", x: 2, y: 0, w: 2, h: 2 },
      { i: "4", x: 2, y: 1, w: 4, h: 2 },
      { i: "5", x: 2, y: 2, w: 2, h: 2 },
      { i: "6", x: 4, y: 0, w: 4, h: 2 },
      { i: "7", x: 4, y: 1, w: 4, h: 2 },
      { i: "8", x: 6, y: 0, w: 2, h: 2 },
      { i: "9", x: 8, y: 0, w: 2, h: 4 },
      { i: "10", x: 8, y: 1, w: 2, h: 2 },
    ],
    md: [
      { i: "1", x: 0, y: 0, w: 2, h: 4 },
      { i: "2", x: 0, y: 0, w: 2, h: 2 },
      { i: "3", x: 2, y: 0, w: 2, h: 2 },
      { i: "4", x: 2, y: 1, w: 4, h: 2 },
      { i: "5", x: 2, y: 2, w: 2, h: 2 },
      { i: "6", x: 4, y: 0, w: 4, h: 2 },
      { i: "7", x: 4, y: 1, w: 4, h: 2 },
      { i: "8", x: 6, y: 0, w: 2, h: 2 },
      { i: "9", x: 8, y: 0, w: 2, h: 4 },
      { i: "10", x: 8, y: 1, w: 2, h: 2 },
    ],
    sm: [
      { i: "1", x: 0, y: 0, w: 2, h: 4 },
      { i: "2", x: 0, y: 0, w: 2, h: 2 },
      { i: "3", x: 0, y: 0, w: 2, h: 2 },
      { i: "4", x: 0, y: 1, w: 2, h: 2 },
      { i: "5", x: 0, y: 2, w: 2, h: 2 },
      { i: "6", x: 2, y: 0, w: 2, h: 2 },
      { i: "7", x: 2, y: 1, w: 2, h: 2 },
      { i: "8", x: 2, y: 0, w: 2, h: 2 },
      { i: "9", x: 2, y: 0, w: 2, h: 4 },
      { i: "10", x: 2, y: 1, w: 2, h: 2 },
    ],
    xs: [
      { i: "1", x: 0, y: 0, w: 2, h: 4 },
      { i: "2", x: 0, y: 1, w: 1, h: 1 },
      { i: "3", x: 2, y: 8, w: 1, h: 1 },
      { i: "4", x: 0, y: 2, w: 1, h: 1 },
      { i: "5", x: 0, y: 3, w: 1, h: 1 },
      { i: "6", x: 0, y: 4, w: 4, h: 2 },
      { i: "7", x: 2, y: 4, w: 1, h: 1 },
      { i: "8", x: 2, y: 0, w: 1, h: 1 },
      { i: "9", x: 0, y: 6, w: 2, h: 2 },
      { i: "10", x: 0, y: 7, w: 2, h: 2 },
    ],
    xxs: [
      { i: "1", x: 0, y: 0, w: 2, h: 4 },
      { i: "2", x: 0, y: 1, w: 1, h: 1 },
      { i: "3", x: 2, y: 8, w: 1, h: 1 },
      { i: "4", x: 0, y: 2, w: 4, h: 1 },
      { i: "5", x: 0, y: 3, w: 1, h: 1 },
      { i: "6", x: 0, y: 4, w: 4, h: 2 },
      { i: "7", x: 0, y: 5, w: 2, h: 1 },
      { i: "8", x: 2, y: 0, w: 1, h: 1 },
      { i: "9", x: 0, y: 6, w: 2, h: 2 },
      { i: "10", x: 0, y: 7, w: 2, h: 2 },
    ],
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [showEmailModal, setShowEmailModal] = useState(false);

  useEffect(() => {
    // Add event listener to handle closing the modal when pressing the Escape key
    const handleEscapeKey = (event: any) => {
      if (event.key === "Escape") {
        setShowEmailModal(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const generateDOM = () => {
    return layouts.lg.map((l: any, i: number) => (
      <div key={l.i} className={l.static ? "static" : ""}>
        {l.static ? (
          <span
            className="text"
            title="This item is static and cannot be removed or resized."
          >
            Static - {l.i}
          </span>
        ) : (
          <motion.div
            key="22"
            className="rounded-3xl bg-light_grey_p  dark:bg-[#1a1a1a] h-full"
            initial={{ opacity: 0 }} // Initial opacity before animation
            animate={{ opacity: 1 }} // Opacity when animation completes
            transition={{ duration: 0.5, delay: 0.1 * i }} // Animation duration and delay
          >
            <div
              key="22"
              className="rounded-3xl bg-light_grey_p  dark:bg-[#1a1a1a] h-full "
            >
              {l.i === "1" ? <Profile /> : null}
              {l.i === "2" ? <LinkedInIcon /> : null}
              {l.i === "3" ? (
                <Subs currentSubscribers={1000} goalSubscribers={10000} />
              ) : null}
              {l.i === "4" ? <Buildtopia /> : null}
              {l.i === "5" ? <DarkModeSwitch /> : null}

              {l.i === "6" ? <YouTubeVideo videoId="XsuJ3eY2pqk" /> : null}
              {l.i === "7" ? <Headstart /> : null}
              {l.i === "8" ? <InstagramIcon /> : null}
              {l.i === "9" ? <Email /> : null}
              {l.i === "10" ? <Map /> : null}
            </div>
          </motion.div>
        )}
      </div>
    ));
  };

  return (
    <div className="max-w-[1600px] ">
      <ResponsiveGridLayout
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 10, md: 8, sm: 4, xs: 2, xxs: 2 }}
        measureBeforeMount={false}
        useCSSTransforms={mounted}
        isDraggable={false}
        isResizable={false}
      >
        {generateDOM()}
      </ResponsiveGridLayout>
      {showEmailModal && <EmailModal />}
      {/* <EmailModal /> */}
    </div>
  );
};

export default MyResponsiveGrid;
