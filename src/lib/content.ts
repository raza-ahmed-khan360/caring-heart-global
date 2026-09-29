import { BookOpen, Cross, Droplets, HeartHandshake, Leaf, PackageOpen, Sun, Utensils } from "lucide-react";
export const programs=[
 {title:"Food security",description:"Nutritious meals, family food packages, and feeding centers that combat hunger and malnutrition.",icon:Utensils,tone:"#c76542"},
 {title:"Clean water",description:"Community wells and purification systems that make safe drinking water accessible.",icon:Droplets,tone:"#39788c"},
 {title:"Education",description:"Scholarships, school supplies, and learning resources that open doors for the next generation.",icon:BookOpen,tone:"#a26b31"},
 {title:"Emergency aid",description:"Rapid, compassionate support during natural disasters, conflict, and displacement.",icon:PackageOpen,tone:"#9c4e4a"},
 {title:"Health support",description:"Medical outreach, vaccinations, and maternal and child health services.",icon:Cross,tone:"#b34f65"},
 {title:"Self-reliance",description:"Vocational training, agricultural initiatives, and practical support for durable livelihoods.",icon:HeartHandshake,tone:"#236958"},
 {title:"Solar energy",description:"Renewable power for homes, schools, and medical facilities in underserved communities.",icon:Sun,tone:"#cb8d23"},
 {title:"Zakat",description:"Responsible charitable distribution that uplifts families and honors religious obligations.",icon:Leaf,tone:"#547746"},
] as const;
export const team=[
 {name:"Tijjani Mohammed",role:"Founder",bio:"Tijjani founded Caring Hearts from a personal commitment to communities in his home country. He leads with compassion, local connection, and a belief that lasting change begins with ordinary people who care."},
 {name:"Khadija Mohammed",role:"Vice President",bio:"Khadija brings experience in nonprofit work, disaster management, case management, and disaster relief—helping shape programs that respond thoughtfully to urgent needs."},
 {name:"Aisha Mohammed",role:"Treasurer",bio:"Aisha oversees financial operations with care and integrity, helping ensure that every contribution is managed responsibly and directed toward meaningful impact."},
 {name:"Yasmeen Mohammed",role:"Secretary",bio:"Yasmeen keeps the mission organized and transparent, coordinating records and communication so the team stays connected to the communities it serves."},
] as const;
