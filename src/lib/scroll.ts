export const scrollToSection = (sectionId: string) => {
  const element = document.querySelector(sectionId);
  if (!element) return;

  const headerHeight = 80; // Height of sticky header
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};
