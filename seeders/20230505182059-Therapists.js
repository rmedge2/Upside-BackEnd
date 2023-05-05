'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Therapists', [
      {
        id: 1,
        name: "Dr. Jane Smith",
        specialities: "Depression",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "Dr. Michael Lee",
        specialities: "Anxiety",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 3,
        name: "Dr. Karen Johnson",
        specialities: "Relationship Issues",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 4,
        name: "Dr. Sarah Patel",
        specialities: "Eating Disorders",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 5,
        name: "Dr. Robert Garcia",
        specialities: "Addiction",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 6,
        name: "Dr. Amanda Jones",
        specialities: "Trauma",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 7,
        name: "Dr. Eric Kim",
        specialities: "Obsessive-Compulsive Disorder (OCD)",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 8,
        name: "Dr. Samantha Chen",
        specialities: "Attention Deficit Hyperactivity Disorder (ADHD)",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 9,
        name: "Dr. William Davis",
        specialities: "Bipolar Disorder",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 10,
        name: "Dr. Laura Robinson",
        specialities: "Child and Adolescent Therapy",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 11,
        name: "Dr. Daniel Hernandez",
        specialities: "Post-Traumatic Stress Disorder (PTSD)",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 12,
        name: "Dr. Rachel Nguyen",
        specialities: "Grief and Loss",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 13,
        name: "Dr. John Kim",
        specialities: "Anger Management",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 14,
        name: "Dr. Elizabeth Martinez",
        specialities: "Sleep Disorders",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 15,
        name: "Dr. Kevin Lee",
        specialities: "Phobias",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 16,
        name: "Dr. Anna Brown",
        specialities: "Borderline Personality Disorder (BPD)",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 17,
        name: "Dr. Timothy Green",
        specialities: "Gender Identity",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 18,
        name: "Dr. Maria Rodriguez",
        specialities: "Self-Esteem and Confidence",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 19,
        name: "Dr. Christopher Chen",
        specialities: "Couples Therapy",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 20,
        name: "Dr. Emily Taylor",
        specialities: "Career Counseling",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 21,
        name: "Dr. Matthew Adams",
        specialities: "Social Anxiety",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 22,
        name: "Dr. Jasmine Kim",
        specialities: "Body Image Issues",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 23,
        name: "Dr. Stephen Park",
        specialities: "Panic Attacks",
        createdAt: new Date(), 
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Therapists', null, {});
  },
};
