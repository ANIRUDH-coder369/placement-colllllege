import Link from "next/link";
import React from "react";

const StudentNavbar = () => {
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
                        href="/Student"
                        style={{
                            textDecoration: "none",
                            background: "#16A34A",
                            color: "white",
                            padding: "12px 22px",
                            borderRadius: "8px",
                            fontWeight: "600",
                            display: "inline-block",
                            transition: "0.3s",
                        }}
                    >
                        Student Login
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default StudentNavbar;
