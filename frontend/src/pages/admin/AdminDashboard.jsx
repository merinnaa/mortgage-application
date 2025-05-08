import React,{useState,useEffect} from 'react';
import AdminStatus from '../../components/AdminCard';

const AdminDashboard = () => {
  // const applicants = [
  //   { name: "Kyle Lebowski" },
  //   { name: "Maya Jones" },
  //   { name: "John Smith" },
  // ];
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await fetch("https://mortgage-application-server.vercel.app/dashboard/lender", {
          method: "GET",
          headers: { token: localStorage.token }
        });
        
        const data = await response.json();
        
        
        setApplicants(data.users);

      } catch (error) {
        console.error('Error fetching applicants:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplicants();
  }, []);


  return (
    <div className="min-h-screen bg-stone-100 flex justify-center py-16 px-4">
      <div className="w-full max-w-[600px] flex flex-col gap-8">
        <div className="text-zinc-800 text-5xl font-bold font-['Inter'] leading-[56px] tracking-wide">
          Applications
        </div>

        <div className="flex flex-col gap-8">
          {applicants.map((applicant, index) => (
            <AdminStatus key={index} name={applicant.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
