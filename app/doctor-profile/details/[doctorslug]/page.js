import DoctorDetails from "./DoctorDetails";
import doctorsData from "@/Data/Doctors_detials.json";

export default function Page({ params: { doctorslug } }) {
  const doctorData = doctorsData.find((p) => p.slug === doctorslug) || null;

  if (!doctorData) {
    return <div>Doctor not found</div>;
  }

  return <DoctorDetails doctorData={doctorData} />;
}
