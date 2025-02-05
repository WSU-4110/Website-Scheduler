'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Card from '../components/ui/card';
import Sidebar from '../components/Sidebar'; 
import AutoRefreshPage from '../refresh_page';

export default function HairStylists() {
  const router = useRouter();

  const mockBusinesses = [
    {
      businessName: 'Hairloft Salon',
      address: '8192 Oakman St, Alemond, MI',
      images: [
        'https://hemispherehair.com.au/wp-content/uploads/2023/01/shutterstock_1776190742.jpg',
      ],
      about:
        'A modern hair salon specializing in creating stunning hairstyles for every occasion. Whether you are looking for a fresh cut, a bold new color, or expert styling for a special event, Hairloft Salon offers personalized services to bring out your best look.',
      services: ['Haircuts', 'Hair Treatments', 'Hair Coloring', 'Styling'],
      socialLinks: ['https://instagram.com/hairloftsalon'],
    },
  ];

  const handleBookClick = (businessName: string) => {
    router.push('schedule');
  };

  return (
    <div className="container">
      <div className="flex">
      <AutoRefreshPage />
        <Sidebar />
        <main className="ml-64 w-full p-8">
          <h1 className="title">Hair Stylists</h1>
          <div className="list">
            {mockBusinesses.length > 0 ? (
              mockBusinesses.map((business, index) => (
                <Card
                  key={index}
                  businessName={business.businessName}
                  address={business.address}
                  images={business.images}
                  about={business.about}
                  services={business.services}
                  socialLinks={business.socialLinks}
                  onBookClick={handleBookClick}
                />
              ))
            ) : (
              <p>No businesses available. Please check back later!</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
