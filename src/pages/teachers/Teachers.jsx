import React, { useState } from 'react'
import './Teachers.css'
import { RxCross2 } from 'react-icons/rx';

const Teachers = () => {
  const teachersData = [
    {
      name: 'মোঃ সোলাইমান হোসেন',
      designation: 'সহকারী অধ্যাপক',
      phone: '04161-354156',
      image: '/assets/profile.jpg',
    },
    {
      name: 'মোঃ খলিলুর রহমান',
      designation: 'সাধারণ শিক্ষক',
      phone: '04161-354156',
      image: '/assets/profile.jpg',
    },
    {
      name: 'মোঃ আব্দুর রহমান',
      designation: 'সাধারণ শিক্ষক',
      phone: '04161-354156',
      image: '/assets/profile.jpg',
    },
    {
      name: 'মোঃ আলম আব্বাশী',
      designation: 'সাধারণ শিক্ষক',
      phone: '04161-354156',
      image: '/assets/profile.jpg',
    },
  ]

  const handleUpdate = (index) => {
    // Implement the update logic for the item at the given index
    console.log('Update clicked for index:', index);
  };

  const handleRemove = (index) => {
    // Implement the remove logic for the item at the given index
    console.log('Remove clicked for index:', index);
  };

  // Modal popup For add Events
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  // Selected Image from Desktop
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <React.Fragment>
    {isModalOpen && (
        <div className="overlay"></div>
      )}

      <div id="teachers">
        <div className="teachers-title mt-4">
          <h3 className='bg-[#79929C] text-white font-medium text-md p-4'>আমাদের শিক্ষক</h3>
        </div>
        <div className='teachers-card grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3'>
          {teachersData.map((teacher, index) => (
            <div key={index} className="teachers-card p-4 bg-[#FFFFFF] shadow my-3 flex flex-col items-center">
              <div className='teachers-card-img my-4'>
                <picture>
                  <img src={teacher.image} alt="profile" />
                </picture>
              </div>
              <div className="teachers-card-identity">
                <h4 className='font-medium text-md'>{teacher.name}</h4>
                <h5>{teacher.designation}</h5>
                <h5>মোবাইলঃ {teacher.phone}</h5>
                <h6>দানারহাট আনছারিয়া ফাজিল মাদ্রাসা, ঠাকুরগাঁও</h6>
                <div className='flex justify-between mt-3'>
                  <button className='bg-[#244c63ad] text-white px-4 py-1' onClick={() => { handleUpdate(index); handleModalOpen(); }} >Update</button>
                  <button className='bg-[#CE5A67] text-white px-4 py-1' onClick={() => handleRemove(index)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='mb-4 cursor-pointer text-end mt-4 text-white'>
          <a href="##" onClick={handleModalOpen} className='bg-[#244c63ad] px-4 my-2 w-44 py-2 border'>নতুন সংযোগ </a>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-container">
          <div className="modal shadow absolute top-10  bg-[#FFFFFF]  border p-14 max-w-96 ">
            <div className="modal-content">
            <span className="close cursor-pointer border bg-[#111] px-4 text-end py-1 text-white absolute right-2 top-2" onClick={handleModalClose}><a href="##"><i className=' py-8 text-2xl '><RxCross2 /></i></a></span>

              {/* form content goes here */}
              <div className='mt-10'>
                <form>

                  <div className="form-group flex flex-wrap my-2 items-center ">
                    <label htmlFor="title" className='pr-4 w-32'>শিক্ষকের নামঃ</label>
                    <input className='outline-none px-4 py-2 bg-[#F3F3F3]' type="text" id="title" name="title" placeholder="শিক্ষকের নামঃ" />
                  </div>

                  <div className="form-group flex flex-wrap my-2 items-center ">
                    <label htmlFor="title" className='pr-4 w-32'>পদঃ</label>
                    <input className='outline-none  px-4 py-2 bg-[#F3F3F3]' type="text" id="title" name="title" placeholder="পদ" />
                  </div>

                  <div className="form-group flex flex-wrap my-2 items-center">
                    <label htmlFor="date" className='pr-4 w-32'>মোবাইল নম্বরঃ</label>
                    <input className='outline-none  px-4 py-2 bg-[#F3F3F3]' type="text" id="title" name="title" placeholder="মোবাইল নম্বর" />
                  </div>
                    
                  <div className="form-group my-4">
                    <label htmlFor="image" className='pr-4 w-32'>শিক্ষকের ছবিঃ</label>
                    <input src={selectedImage} type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} />
                  </div>

                  <div className="text-center mt-14 text-black">
                    <button type="submit" className='bg-[#c5dfe77a] px-12 py-4'>সংযোগ করুন</button>
                  </div>

                </form>
                
              </div>
            </div>
          </div>
        </div>
      )}

    </React.Fragment>
  )
}

export default Teachers