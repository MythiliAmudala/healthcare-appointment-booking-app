const doctorsList = [
    {
      id: '1',
      name: 'Dr. Aamir Shaikh',
      specialization: 'Cardiologist, Dept. of Heart Care',
      profileImageUrl: 'https://ik.imagekit.io/kili4mtus/e447f2cf-c5e9-4164-a477-bbd6740f080f.jpg?updatedAt=1754137673547',
      isAvailable: true,
      rating: '4.7',
      about: 'Dr. Aamir is known for his compassionate care and precision in treating heart-related conditions. He brings over 12 years of experience in interventional cardiology.',
      aboutSpecialization: 'Cardiology deals with disorders of the heart and blood vessels, focusing on patient diagnosis and long-term cardiac health.'
    },
    {
      id: '2',
      name: 'Dr. Meena Reddy',
      specialization: 'Senior Gynecologist, Women Wellness Center',
      profileImageUrl: 'https://ik.imagekit.io/kili4mtus/bc398016-6329-411f-970d-cc4ce1b3ec68.jpg?updatedAt=1754135979100',
      isAvailable: true,
      rating: '4.9',
      about: 'With over 15 years in gynecology, Dr. Meena is passionate about women’s health and has helped thousands through safe deliveries and advanced treatments.',
      aboutSpecialization: 'Gynecology focuses on the reproductive health of women, including prenatal care, menstruation, and fertility issues.'
    },
    {
      id: '3',
      name: 'Dr. Karthik Iyer',
      specialization: 'Orthopedic Surgeon, Bone & Joint Care',
      profileImageUrl: 'https://ik.imagekit.io/kili4mtus/doctor%20and%20health%20care.jpg?updatedAt=1754136015678',
      isAvailable: false,
      rating: '4.3',
      about: 'Dr. Karthik is a skilled orthopedic surgeon specializing in joint replacement and sports injury treatments. He emphasizes patient mobility and long-term care.',
      aboutSpecialization: 'Orthopedics involves the treatment of bones, joints, ligaments, tendons, and muscles, often through surgical and physical therapy approaches.'
    },
    {
      id: '4',
      name: 'Dr. Nivedita Kapoor',
      specialization: 'Dermatologist, Skin & Laser Unit',
      profileImageUrl: 'https://ik.imagekit.io/kili4mtus/2abc21df-66f5-499c-bfd6-cbbc28e47eb8.jpg?updatedAt=1754135961765',
      isAvailable: true,
      rating: '4.6',
      about: 'Dr. Nivedita is a certified dermatologist offering skin treatments with modern laser technology. She believes in natural aesthetics and patient education.',
      aboutSpecialization: 'Dermatology focuses on diagnosing and treating skin, hair, and nail disorders, including cosmetic dermatological procedures.'
    },
    {
      id: '5',
      name: 'Dr. Aravind Krishnan',
      specialization: 'Neurologist, Brain & Spine Institute',
      profileImageUrl: 'https://ik.imagekit.io/kili4mtus/6fa50d79-a37b-4fc6-bdc8-9b2c7e2350c3.jpg?updatedAt=1754136900979',
      isAvailable: true,
      rating: '4.8',
      about: 'Dr. Aravind treats complex neurological disorders with an emphasis on brain and spinal health. He is known for his clear communication and detailed diagnosis.',
      aboutSpecialization: 'Neurology is the medical specialty dealing with disorders of the nervous system, including the brain, spinal cord, and nerves.'
    },
    {
      id: '6',
      name: 'Dr. Farah Khan',
      specialization: 'Pediatrician, Child Health Department',
      profileImageUrl: 'https://ik.imagekit.io/kili4mtus/46918675-289b-4876-9102-a19fade4c54c.jpg?updatedAt=1754136000057',
      isAvailable: false,
      rating: '4.5',
      about: 'Dr. Farah is a friendly and experienced pediatrician, adored by kids and trusted by parents. She has helped many children grow healthier and stronger.',
      aboutSpecialization: 'Pediatrics is the branch of medicine that involves medical care for infants, children, and adolescents up to the age of 18.'
    },
    {
      id: '7',
      name: 'Dr. Rohan Malhotra',
      specialization: 'ENT Specialist, Head & Neck Clinic',
      profileImageUrl: 'https://ik.imagekit.io/kili4mtus/5c0e0fbf-afc8-404b-8c57-c6b94847bab1.jpg?updatedAt=1754136900535',
      isAvailable: true,
      rating: '4.4',
      about: 'Dr. Rohan is highly skilled in diagnosing and treating ENT conditions. He provides effective treatments for hearing, sinus, and throat disorders.',
      aboutSpecialization: 'ENT (Otolaryngology) deals with diseases of the ear, nose, throat, head, and neck. It combines surgical and medical treatment.'
    },
    {
      id: '8',
      name: 'Dr. Priya Deshmukh',
      specialization: 'Psychiatrist, Mental Wellness Center',
      profileImageUrl: 'https://ik.imagekit.io/kili4mtus/89967684-1ceb-49ef-97d6-464ba165350e.jpg?updatedAt=1754137659895',
      isAvailable: true,
      rating: '4.9',
      about: 'Dr. Priya is passionate about mental health and offers compassionate care for anxiety, depression, and emotional well-being.',
      aboutSpecialization: 'Psychiatry focuses on the diagnosis, treatment, and prevention of mental, emotional, and behavioral disorders.'
    },
    {
      id: '9',
      name: 'Dr. Nishant Verma',
      specialization: 'General Physician, Internal Medicine',
      profileImageUrl: 'https://ik.imagekit.io/kili4mtus/8cf91bc7-f6fa-4cfd-804d-1261214ab7ae.jpg?updatedAt=1754135622838',
      isAvailable: true,
      rating: '4.6',
      about: 'Dr. Nishant is a trusted general physician who handles everything from common illnesses to chronic disease management.',
      aboutSpecialization: 'Internal medicine involves diagnosing and managing adult diseases through non-surgical means, emphasizing preventive care.'
    },
    {
      id: '10',
      name: 'Dr. Sneha Thomas',
      specialization: 'Endocrinologist, Diabetes & Thyroid Clinic',
      profileImageUrl: 'https://ik.imagekit.io/kili4mtus/b0ba737d-0d5f-4671-ad91-d05bf134a738.jpg?updatedAt=1754136900840',
      isAvailable: false,
      rating: '4.3',
      about: 'Dr. Sneha is a renowned endocrinologist treating hormone imbalances, especially thyroid and diabetes-related issues.',
      aboutSpecialization: 'Endocrinology is the study of hormones, treating disorders like diabetes, thyroid diseases, and adrenal gland issues.'
    },
    {
      id: '11',
      name: 'Dr. Anand Rathi',
      specialization: 'Pulmonologist, Respiratory Unit',
      profileImageUrl: 'https://ik.imagekit.io/kili4mtus/Pursue%20your%20medical%20dreams%20at%20Petre%20Shotadze_.jpg?updatedAt=1754136963707',
      isAvailable: true,
      rating: '4.5',
      about: 'Dr. Anand is experienced in managing asthma, COPD, and other respiratory illnesses with a personalized treatment approach.',
      aboutSpecialization: 'Pulmonology focuses on respiratory system disorders, including lungs, bronchial tubes, and chest-related problems.'
    },
    {
      id: '12',
      name: 'Dr. Leena Fernandez',
      specialization: 'Oncologist, Cancer Care Center',
      profileImageUrl: 'https://ik.imagekit.io/kili4mtus/125630c0-5153-413f-9a40-8d2f470d43e1.jpg?updatedAt=1754135703698',
      isAvailable: true,
      rating: '4.7',
      about: 'Dr. Leena provides cutting-edge cancer treatments and palliative care, ensuring empathy and hope for every patient.',
      aboutSpecialization: 'Oncology is the branch of medicine dealing with the prevention, diagnosis, and treatment of cancer.'
    },
    {
      id: '13',
      name: 'Dr. Harish Venkatesh',
      specialization: 'Urologist, Kidney & Bladder Unit',
      profileImageUrl: 'https://ik.imagekit.io/kili4mtus/Dr%20Gabriel%20Trava%20_%20Pediatra%20%20%20_dr%20_doc_.jpg?updatedAt=1754136949163',
      isAvailable: false,
      rating: '4.4',
      about: 'Dr. Harish specializes in urological surgery and care, addressing conditions related to kidneys, bladder, and urinary tract.',
      aboutSpecialization: 'Urology focuses on the urinary system and male reproductive organs, treating kidney stones, infections, and more.'
    },
    {
      id: '14',
      name: 'Dr. Anjali Bhatt',
      specialization: 'Radiologist, Diagnostic Imaging',
      profileImageUrl: 'https://ik.imagekit.io/kili4mtus/b8a7fe18-ecbb-48b1-8c7d-28b0911f26d0.jpg?updatedAt=1754135723409',
      isAvailable: true,
      rating: '4.6',
      about: 'Dr. Anjali interprets imaging scans with precision, playing a crucial role in accurate diagnoses and early detection.',
      aboutSpecialization: 'Radiology uses imaging technologies such as X-rays, CT scans, MRIs, and ultrasounds to diagnose diseases.'
    },
    {
      id: '15',
      name: 'Dr. Michael Raj',
      specialization: 'Nephrologist, Renal Health Division',
      profileImageUrl: 'https://ik.imagekit.io/kili4mtus/3415d01b-6214-4bee-93fd-1c4f91c27352.jpg?updatedAt=1754137659868',
      isAvailable: true,
      rating: '4.8',
      about: 'Dr. Michael is dedicated to kidney care and specializes in treating renal failure and dialysis patients with empathy.',
      aboutSpecialization: 'Nephrology deals with the kidneys, including dialysis treatment and management of chronic kidney disease.'
    },
  ]
  
  export default doctorsList
  