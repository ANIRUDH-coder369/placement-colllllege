"use client"

import CompanyNavbar from "./_componets/CompanyNavbar";
import StudentNavbar from "./_componets/StudentNavbar";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.65)",
          minHeight: "100vh",
          padding: "60px 20px",
          color: "white",
        }}
      >
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h1
            style={{
              fontSize: "52px",
              fontWeight: "bold",
              color: "#FFD700",
            }}
          >
            College Placement Portal
          </h1>

          <h2
            style={{
              fontSize: "24px",
              marginTop: "10px",
              color: "#E5E7EB",
            }}
          >
            Connecting Students with Top Recruiting Companies
          </h2>
        </div>

        {/* Cards Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "80px",
            flexWrap: "wrap",
          }}
        >
          {/* Company Portal */}
          <div
            style={{
              background: "white",
              color: "#1F2937",
              padding: "50px",
              borderRadius: "14px",
              width: "380px",
              textAlign: "center",
              boxShadow: "0px 12px 30px rgba(0,0,0,0.35)",
            }}
          >
            <h2
              style={{
                color: "#1D4ED8",
                fontSize: "32px",
                fontWeight: "bold",
                marginBottom: "15px",
              }}
            >
              Company Portal
            </h2>

            <p
              style={{
                fontSize: "17px",
                color: "#4B5563",
                marginBottom: "35px",
                lineHeight: "1.6",
              }}
            >
              Register your company and connect with talented students for
              campus recruitment opportunities.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <CompanyNavbar />
            </div>
          </div>

          {/* Student Portal */}
          <div
            style={{
              background: "white",
              color: "#1F2937",
              padding: "50px",
              borderRadius: "14px",
              width: "380px",
              textAlign: "center",
              boxShadow: "0px 12px 30px rgba(0,0,0,0.35)",
            }}
          >
            <h2
              style={{
                color: "#16A34A",
                fontSize: "32px",
                fontWeight: "bold",
                marginBottom: "15px",
              }}
            >
              Student Portal
            </h2>

            <p
              style={{
                fontSize: "17px",
                color: "#4B5563",
                marginBottom: "35px",
                lineHeight: "1.6",
              }}
            >
              Create your profile and apply for available placement
              opportunities.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <StudentNavbar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
