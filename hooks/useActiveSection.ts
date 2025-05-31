import { useEffect, useState } from "react";

const useActiveSection = (sectionIds: string[]): string => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let closestSection = "";
      let minDistance = Number.POSITIVE_INFINITY;

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top);

          if (distance < minDistance) {
            minDistance = distance;
            closestSection = id;
          }
        }
      });

      if (closestSection) {
        setActiveSection(closestSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Call once at mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeSection;
};

export default useActiveSection;
