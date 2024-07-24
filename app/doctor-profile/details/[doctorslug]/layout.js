import { Metadata } from "next";
import doctorsData from "@/Data/Doctors_detials.json";

export async function generateMetadata({ params }) {
  const { doctorslug } = params;
  const doctorData = await fetchDoctorData(doctorslug);

  if (!doctorData) {
    return {
      title: "Doctor Not Found",
      description: "The requested doctor page could not be found.",
    };
  }

  return {
    title: `Dr. ${doctorData.doctor_name} | ${doctorData.doctor_education} | Assure Pathlabs Jalandhar`,
    description: `Meet Dr. ${doctorData.doctor_name}, a leading ${doctorData.doctor_education} at Assure Pathlabs in Jalandhar. Discover their qualifications, experience, and patient reviews. Schedule your consultation today for personalized medical care.`,
  };
}

export default function Layout({ children }) {
  return children;
}

async function fetchDoctorData(slug) {
  // Since we're importing the JSON file at the top, we can use it directly here
  return doctorsData.find((p) => p.slug === slug) || null;
}
