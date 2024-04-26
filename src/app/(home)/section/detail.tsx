
import React from 'react';
import { FacebookOutlined, PlusOutlined, EyeOutlined, EyeInvisibleOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { Carousel } from 'antd';

const Detail = () => {
  const responsiveSettings = [
    {
      breakpoint: 640, // Điểm ngắt cho màn hình nhỏ
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // Điểm ngắt cho màn hình trung bình
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024, // Điểm ngắt cho màn hình lớn
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ];
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="">
          {<EyeInvisibleOutlined />} Đã xem
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="">
          {<EyeOutlined />} Muốn xem
        </a>
      ),
    },
  ];

  return (
    <>
      <section className="w-full overflow-hidden dark:bg-gray-900">
        <div className="flex flex-col">
          <img
            src="https://afamilycdn.com/150157425591193600/2024/3/14/ngang-copy-15-1829-1710427118402-17104271187901682991653.jpg"
            alt="User Cover"
            className="w-full max-h-screen brightness-50"
          />
          <div className="sm:w-[80%] xs:w-[90%] mx-auto flex flex-col sm:flex-row">
            <img
              src="https://newsmd2fr.keeng.vn/tiin/archive/imageslead/2024/03/15/5n9vsqwpacthbap3t9csmlldpjg90ayw.jpg"
              alt="User Profile"
              className="rounded-md lg:w-[20rem] lg:h-[25rem] md:w-[15rem] md:h-[15rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]"
            />

            <div className="container mx-auto px-4 sm:px-16 flex-1">
              <div className="text-left text-gray-800 dark:text-white">
                <h1 className="font-serif text-3xl sm:text-4xl">EXHUMA</h1>
                <div className="py-3 font-sans text-lg">
                  Quat mo trung ma
                  <a href="" className="text-blue-400">(2024)</a>
                </div>
                <div className="py-3 font-sans text-lg">2 giờ 14 phút</div>

                <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button type="primary" className="w-28 h-10" icon={<FacebookOutlined />}>
                    Chia sẻ
                  </Button>
                  <Dropdown menu={{ items }} placement="bottomLeft">
                    <Button icon={<PlusOutlined />}>Bộ sưu tập</Button>
                  </Dropdown>

                  <div className="flex flex-row sm:justify-end space-x-4 sm:ml-auto mt-4">
                    <Button className="w-20 h-10">Kinh dị</Button>
                    <Button className="w-20 h-10">Giật gân</Button>
                    <Button className="w-20 h-10">Bí ẩn</Button>
                  </div>
                </div>

                <div className="py-10">
                  <div className="flex flex-col sm:flex-row sm:space-x-14 items-center">
                    <p className="font-serif text-xl">Đạo diễn</p>
                    <a href="" className="font-serif text-sm">Jang Jae-hyun</a>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:space-x-14 items-center mt-4">
                    <p className="font-serif text-xl">Kịch bản</p>
                    <a href="" className="font-serif text-sm">Jang Jae-hyun</a>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:space-x-14 items-center mt-4">
                    <p className="font-serif text-xl">Nation</p>
                    <a href="" className="font-serif text-sm px-5">Korea</a>
                  </div>
                  <p className='flex flex-col scroll-m-1 py-5'>Hai pháp sư, một thầy phong thuỷ và một chuyên gia khâm liệm cùng hợp lực khai quật ngôi mộ bị nguyền rủa của một gia đình giàu có, nhằm cứu lấy sinh mạng hậu duệ cuối cùng trong dòng tộc. Bí mật hắc ám của tổ tiên được đánh thức.</p>
                  <div className="flex justify-between items-center py-5">
                    <p className="text-2xl font-thin">Điễn Viên</p>
                   
                  </div>


                  <div className="w-full overflow-hidden">
                    <Carousel
                      dots={false}  // Ẩn các dấu chấm
                      arrows={false}  // Hiển thị mũi tên điều hướng
                      autoplay={true}  // Tự động chuyển slide
                      slidesToShow={7}  // Số slide hiển thị cùng lúc
                      infinite={true}  // Vòng lặp vô hạn
                      responsive={responsiveSettings} 
                    >
                      <div>
                        <img
                          src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-rose-blackpink-cute-06.jpg"
                          alt="Slide 1"
                          className="w-24 h-24 rounded-full mr-10"
                        />
                      </div>
                      <div>
                        <img
                          src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-rose-blackpink-cute-06.jpg"
                          alt="Slide 2"
                          className="w-24 h-24 rounded-full mr-10"
                        />
                      </div>
                      <div>
                        <img
                          src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-rose-blackpink-cute-06.jpg"
                          alt="Slide 3"
                          className="w-24 h-24 rounded-full mr-10"
                        />
                      </div>
                      <div>
                        <img
                          src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-rose-blackpink-cute-06.jpg"
                          alt="Slide 4"
                          className="w-24 h-24 rounded-full mr-10"
                        />
                      </div>
                      <div>
                        <img
                          src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-rose-blackpink-cute-06.jpg"
                          alt="Slide 5"
                          className="w-24 h-24 rounded-full mr-10"
                        />
                      </div>
                      <div>
                        <img
                          src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-rose-blackpink-cute-06.jpg"
                          alt="Slide 5"
                          className="w-24 h-24 rounded-full mr-10"
                        />
                      </div>
                      <div>
                        <img
                          src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-rose-blackpink-cute-06.jpg"
                          alt="Slide 5"
                          className="w-24 h-24 rounded-full mr-10"
                        />
                      </div>
                      <div>
                        <img
                          src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-rose-blackpink-cute-06.jpg"
                          alt="Slide 5"
                          className="w-24 h-24 rounded-full mr-10"
                        />
                      </div>
                      <div>
                        <img
                          src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-rose-blackpink-cute-06.jpg"
                          alt="Slide 5"
                          className="w-24 h-24 rounded-full mr-10"
                        />
                      </div>
                      <div>
                        <img
                          src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-rose-blackpink-cute-06.jpg"
                          alt="Slide 5"
                          className="w-24 h-24 rounded-full mr-10"
                        />
                      </div>
                    </Carousel>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Detail;

