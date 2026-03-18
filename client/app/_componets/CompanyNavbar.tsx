import Link from "next/link";
import React from "react";

const CompanyNavbar = () => {
    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <ul
                style={{
                    display: "flex",
                    gap: "15px",
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                }}
            >
                <li>
                    <Link
                        href="/REGISTER"
                        style={{
                            textDecoration: "none",
                            background: "#2563EB",
                            color: "white",
                            padding: "12px 22px",
                            borderRadius: "8px",
                            fontWeight: "600",
                            display: "inline-block",
                            transition: "0.3s",
                        }}
                    >
                        Register Company
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default CompanyNavbar;
