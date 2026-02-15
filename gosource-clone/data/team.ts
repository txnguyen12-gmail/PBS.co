export interface TeamMember {
  name: string;
  role: string;
  location: string;
  image: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Sam",
    role: "Project Manager",
    location: "San Diego, CA",
    image: "https://images.prismic.io/gs-web/aRGmcrpReVYa4R0Z_sam.jpg",
    bio: "Manages end-to-end renovation timelines with a focus on keeping projects on budget and ahead of schedule.",
  },
  {
    name: "Jake",
    role: "Account Manager",
    location: "Los Angeles, CA",
    image: "https://images.prismic.io/gs-web/aRGmcrpReVYa4R0Z_jake.jpg",
    bio: "Works closely with property owners to tailor renovation packages that maximize ROI and resident satisfaction.",
  },
  {
    name: "Johnathan",
    role: "Coordinator",
    location: "New York, NY",
    image: "https://images.prismic.io/gs-web/aRGmcrpReVYa4R0Z_johnathan.jpg",
    bio: "Coordinates crews, materials, and logistics across multi-site projects to ensure seamless execution.",
  },
  {
    name: "Nir",
    role: "General Contractor",
    location: "Austin, TX",
    image: "https://images.prismic.io/gs-web/aRGmcrpReVYa4R0Z_nir.jpg",
    bio: "Brings 15+ years of construction experience to oversee quality standards across all renovation projects.",
  },
  {
    name: "Miki",
    role: "Project Manager",
    location: "Miami, FL",
    image: "https://images.prismic.io/gs-web/aRGmcrpReVYa4R0Z_miki.jpg",
    bio: "Specializes in fast-turnaround renovations for multifamily properties with minimal disruption to residents.",
  },
  {
    name: "James",
    role: "Contractor",
    location: "Chicago, IL",
    image: "https://images.prismic.io/gs-web/aRGmcrpReVYa4R0Z_james.jpg",
    bio: "Leads on-site crews with a hands-on approach, ensuring every unit meets TanWinWin's quality standards.",
  },
];
