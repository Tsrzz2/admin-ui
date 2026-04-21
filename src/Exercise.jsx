import React from "react";
import UserCard from "./UserCard";

function Exercise() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <UserCard 
          name="Sigit"
          email="Sigit@gmail.com"
          street="jl.Imam Bonjol"
          city="Semarang"
          />
          <UserCard 
          name="Abdul"
          email="Abdul@gmail.com"
          street="jl.Indrapasta"
          city="Ungaran"
          />
          <UserCard 
          name="Duta"
          email="Duta@gmail.com"
          street="jl.Pemuda"
          city="Kendal"
          />
        </div>
      </div>
    </>
  );
}

export default Exercise;