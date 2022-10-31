interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface HomePage extends SanityBody {
  _type: "homePage";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}

export interface Experiance extends SanityBody {
  _type: "experiance";
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorking: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
  url: string;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
  url: string;
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  summary: string;
  image: Image;
  linkToBuild: string;
  technologies: Technology[];
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
