const PROJECTMETADATA = {
  jouxli: {
    title: 'jOUXli | Crafting a Visual Identity for Timeless Jewelry',
    description:
      'Discover how Kia Meggele helped Jouxli, a handcrafted jewelry brand, build a strong visual identity across platforms while preserving its unique storytelling and Scandinavian design roots.',
  },
  superkilen: {
    title: 'Superkilen | A Creative Project by Kia Meggele',
    description:
      'Discover Superkilen, a creative concept developed by Kia Meggele. Explore the idea, design process, and impact behind this innovative project.',
  },
  wonderworks: {
    title: 'Wonderworks | Building a Creative Agency with Purpose',
    description:
      'Learn how Kia Meggele contributes to Wonderworks, a creative agency specializing in branding, visual identity, and UX. Explore her role in product design, frontend development, and strategy.',
  },
  wonderfulcph: {
    title: 'Wonderful Copenhagen | Designing an Inclusive Tourism Experience',
    description:
      'See how Kia Meggele developed a digital concept to enhance accessibility for tourists with disabilities in Copenhagen. A UX-focused project promoting inclusive travel experiences.',
  },
};

export async function generateMetadata({ params }) {
  const { projectname } = await params;
  return {
    title: PROJECTMETADATA[projectname].title,
    description: PROJECTMETADATA[projectname].description,
  };
}

export default function Layout({ children }) {
  return <>{children}</>;
}
