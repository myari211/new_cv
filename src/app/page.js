"use client"

import { Row, Col, Flex } from 'antd';
import {Card, Button, CardBody, Image, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, slider, CardFooter  } from "@heroui/react";
import { DownloadOutlined, PhoneOutlined, InsertRowLeftOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { m } from 'framer-motion';

export default function Home() {
  const [dataSelected, setDataSelected] = useState(null);
  const [expSelected, setExpSelected] = useState({});
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {isOpen: isExpModalOpen, onOpen:onExpModalOpen, onClose: onExpModalClose} = useDisclosure();

  const handleProjectModal = (id) => {
    const selectedDataProject = dataProject.find((project) => project.id === id);
    setDataSelected(selectedDataProject);
    onOpen();
    // setIsModalOpen(true);
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    draggable: true,
    height: "100%",
    autoplay: true,
    autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 1200, // layar besar
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992, // tablet landscape
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // tablet portrait / mobile besar
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  const dataProject = [
    {
      id: 1,
      title: "Lolypoly",
      description: "Ecommerce for Lolypoly",
      image: "/image/lolypoly.png",
      longDesc: "An e-commerce platform where customers can shop and earn membership points and rewards for discount vouchers.",
      tech: [
        "Laravel",
        "Next UI",
        "Redux",
        "Next JS",
        "REST API",
      ]
    },
    {
      id: 2,
      title: "System Manager | AKR (Internal)",
      description: "Portal for all system of internal system AKR",
      image: "/image/sysman.jpg",
      longDesc: "An internal portal platform that allows users with different roles to interact with various internal software systems using initial credential authentication.",
      tech: [
        "Laravel",
        "React JS",
        "Redux",
        "Antd",
        "Telerik Kendo",
      ]
    },
    {
      id: 3,
      title: "Stock Monitoring",
      description: "System Monitoring for all tank and all product AKR Corporindo",
      image: "/image/akr.png",
      longDesc: "A platform to calculate oil stock data in each tank located at ports and refineries across Indonesia",
      tech: [
        "C# MVC",
        "Bootstrap",
        "JQuery",
        "cshtml",
        "Sql Server",
      ],
    },
    {
      id: 4,
      title: "WIMS (Web Incident Management System | AKR (Internal)",
      description: "Web Incident Management For AKR Corporindo",
      image: "/image/wims.jpg",
      longDesc: "An internal ticketing platform based on M-Files.",
      tech: [
        "Laravel",
        "React JS",
        "MySQL",
        "Antd",
        "Telerik Kendo",
      ]
    },
    {
      id: 5,
      title: "FlipFlopTV",
      description: "An OTT platform that provides interesting shows for entertainment from series, short films and movies",
      image: "/image/flipfloptv.png",
      longDesc: "An OTT platform where users can watch paid videos.",
      tech: [
        "Laravel",
        "Jquery",
        "Vue JS",
        "React JS",
        "Redux",
        "MySQL",
        "Google Cloud Platform",
        "Redux",
      ],
    },
    {
      id: 6,
      title: "Proworker",
      description: "A platform based in Bekasi, West Java, for job seekers and seekers for skilled workers, especially those working in the oil and gas sector",
      image: "/image/proworker.png",
      tech: [
        "Laravel",
        "Jquery",
        "React JS",
        "MySQL",
        "Google Cloud Platform",
        "Redux",
      ]
    },
    {
      id: 7,
      title: "Body Gravity",
      description: "company profile platform and system for attendance, payroll, scoliosis data collection, Scheduling System, and stock",
      longDesc: "A platform that combines company profiling with employee attendance and payroll management systems.",
      image: "/image/body_gravity.png",
      tech: [
        "Laravel",
        "Jquery",
        "Bootstrap",
        "MySQL",
      ]
    },
    {
      id: 8,
      title: "SKPR Asia",
      description: "the platform provides several products and public relations",
      longDesc: "A talent acquisition and management system designed to recruit and manage public relations (PR) professionals.",
      image: "/image/skpr_asia.png",
      tech: [
        "Laravel",
        "Jquery",
        "Bootstrap",
        "MySQL",
      ]
    },
    {
      id: 9,
      title: "UKM Volley Gunadarma",
      description: "Gunadarma Volleyball UMKM Portal",
      longDesc: "A membership management platform for the Gunadarma University Volleyball Club.",
      image: "/image/oca.png",
      tech: [
        "Laravel",
        "Jquery",
        "Bootstrap",
        "MySQL",
      ]
    },
    {
      id: 10,
      title: "Caleb Technology",
      description: "company profile, CMS, and Recruiting System",
      longDesc: "Developed a company profile CMS for PT Caleb Technology, enabling easy content updates and centralized management of company information.",
      image: "/image/caleb.png",
      tech: [
        "Laravel",
        "Jquery",
        "Bootstrap",
        "MySQL",
      ]
    }
  ];

  const timelineData = [
    
    {
      id: 1,
      image: "/image/skly.jpg",
      position: "Web Developer",
      company: "CV Surya Kencana Lintas Yasa",
      duration: "2016 - 2017",
      details: [
          "Meeting and discuss and the requirements client web",
          "Create Mockup design and Mockup Database",
          "Develop Website from the Mockup",
          "Deploy to Google Cloud",
          "Debugging and Maintenance Web",
      ],
      tech: [
        "PHP",
        "Yii2",
        "Bootstrap v4",
        "Google Cloud",
        "MySQL",
        "Big Query",
      ],
    },
    {
      id: 2,
      image: "/image/dynamax.jpeg",
      position: "System Engineer",
      company: "Dynamax",
      duration: "2017 - 2020",
      details: [
        "Configuration System with Router Client",
        "Configuration Client Application for daily using",
        "Deploy ID and Client Data to Dynamax Cloud",
        "Maintenance Software and Hardware",
      ],
      tech: [
        "ZigBee",
        "Smarthome",
        "Android",
        "Dynamax",
        "Networking",
      ],
    },
    {
      id: 3,
      image: "/image/proworkerlogo.png",
      position: "Fullstack Developer",
      company: "Proworker",
      duration: "2020 - 2022",
      details: [
        "Analysis Business Process",
        "Create Technical Process from Business Process",
        "Create flow chart Technical Process",
        "Create Database Scheme",
        "Create Features and Scheduled For Development",
        "Analysis Tech Requirement",
        "Developing Tech",
        "Upgrade and Maintain System",
      ],
      tech: [
        "Laravel",
        "MySQL",
        "Jquery",
        "React JS",
        "Github",
        "MDB Bootstrap",
      ],
    },
    {
      id: 4,
      image: "/image/flipfloplogo.png",
      position: "Fullstack Developer",
      company: "FlipFlopTV",
      duration: "2022 - 2023",
      details: [
        "Analysis Model Business and Business Needed",
        "Prepare Tech and creating DB Scheme",
        "Create Tech Flow from Model Business",
        "Create Features and Development Schedule",
        "Start Development from Scratch",
        "Push to Github",
        "Automation Testing",
        "Waiting QA/QC Result using Notion",
        "Repair and Maintenance",
        "Deployment",
        "Upgrade and Maintenance",
        "Create Documentation",
      ],
      tech: [
        "Laravel",
        "Jquery",
        "Vue JS",
        "React JS",
        "Github",
        "MDB Bootstrap",
      ],
    },
    {
      id: 5,
      image: "/image/elabram.jpg",
      position: "Fullstack Developer",
      company: "Elabram System",
      duration: "2023 = 2025",
      details: [
        "Analysis Business Process",
        "Create Technical Process from Business Process",
        "Create Flow chart Technical Process",
        "Create Database Scheme",
        "Create Features and Schedule for Development",
        "Create Mockup and Meeting with stakeholder",
        "Development and improvement for the tech",
        "Create Backend, Public API and Access to POST MAN",
        "Testing and Improvement",
        "Repair and Maintenance",
        "Deployment to Stagging",
        "Colaboration with Devops and Data Center for Deploying to production",
        "Create ERD and HSD Documentation",
        "Create API and Function Documentation"
      ],
      tech: [
        "Laravel",
        "MySQL",
        "Jquery",
        "React JS",
        "Github",
        "MDB Bootstrap",
        "Antd",
        "Next JS",
        "Next UI",
        "Telerik",
        "C# MVC",
        "Bootstrap",
        "SQL Server",
        "Bootstrap",
        "Azure Devops",
      ],
    },
    // { title: "Fullstack Developer", description: "Pendaftaran akun", time: "10:00" },
    // { title: "Verifikasi", description: "Verifikasi email", time: "10:05" },
    // { title: "Profil", description: "Lengkapi profil", time: "10:10" },
    // { title: "Selesai", description: "Semua langkah selesai", time: "10:15" },
  ];

  const handleExperience = (id) => {
    const selected = timelineData.find(item => item.id == id);
    setExpSelected(selected);

    onExpModalOpen();

    console.log("dataSelected", dataSelected);
  }

  const handleCV = () => {
    const link = document.createElement('a');
    link.href = '/new_cv.pdf'; // Asumsikan file ada di folder "public"
    link.download = 'Ari_Pratama_CV.pdf'; // Nama file yang akan didownload
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
        <Row justify="center">
          <Col span={23} className="mt-2">
            <Card className="max-w dark pb-5 card-blur">
              <Row justify="center" className="pt-5">
                <Col>
                  <div className="img-container">
                    <img src="/image/photo_profile.jpg" className="w-100 rounded-circle" />
                  </div>
                </Col>
              </Row>
              <Row className="mt-4" justify="center">
                <Col lg={10} xl={10} md={0} sm={0} xs={0}>
                  <p className="title text-center">Ari Pratama Putra</p>
                </Col>
                <Col lg={0} xl={0} md={23} sm={23} xs={23}>
                  <p className="sub-title text-center">Ari Pratama Putra</p>
                </Col>
              </Row>
              <Row className="mt-2" justify="center">
                <Col lg={10} xl={10} md={23} sm={23} xs={23}>
                  <p className="text-center">
                    Fullstack Developer using PHP Laravel for Backend and React JS for Frontend. Experience with Web Apps Development (PHP and Javascript), Mobile Apps Development (React Native, Flutter). Really like challenges and adapting to new technology.
                  </p>
                </Col>
              </Row>
              <Row justify="center" className="mt-3">
                <Col>
                  <Flex align="center">
                    <Button
                    className="mr-2" 
                    startContent={<PhoneOutlined />} 
                    radius="full"
                    as="a"
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                      Contact Me
                    </Button>
                    <Button radius="full" startContent={<DownloadOutlined />} onPress={() => handleCV()}>
                      Download CV
                    </Button>
                  </Flex>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row justify="center" className="mt-3">
          <Col span={23}>
            <Row gutter={24}>
              <Col xl={6} lg={6} md={6} sm={0} xs={0}>
                <Card className="max-w min-h-[250px] dark">
                  <CardBody>
                    <Flex align="center" justify="center" style={{ width: "100%", height: "100%"}}>
                      <div>
                        <Row justify="center">
                          <Col>
                            <p className="sub-title">Specialization</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p>These are some of the skills I have mastered</p>
                          </Col>
                        </Row>
                      </div>
                    </Flex>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={18} md={24} xl={18} sm={24} xs={24}>
                <Card className="dark max-w min-h-[250px]">
                  <CardBody>
                    <Row justify="center">
                      <Col span={23}>
                        <Slider 
                        {...sliderSettings}>
                          <div>
                            <Flex align="center" justify="center">
                              <img style={{ height: "200px"}} src="/image/react.png" />
                            </Flex>
                          </div>
                          <div>
                            <Flex align="center" justify="center">
                              <img style={{ height: "200px"}} src="/image/vue.png" />
                            </Flex>
                          </div>
                          <div>
                            <Flex align="center" justify="center">
                              <img style={{ height: "200px"}} src="/image/html.png" />
                            </Flex>
                          </div>
                          <div>
                            <Flex align="center" justify="center">
                              <img style={{ height: "200px"}} src="/image/css.png" />
                            </Flex>
                          </div>
                          <div>
                            <Flex align="center" justify="center">
                              <img style={{ height: "200px"}} src="/image/javascript.png" />
                            </Flex>
                          </div>
                          <div>
                            <Flex align="center" justify="center">
                              <img style={{ height: "200px"}} src="/image/php.png" />
                            </Flex>
                          </div>
                          <div>
                            <Flex align="center" justify="center">
                              <img style={{ height: "200px"}} src="/image/laravel.png" />
                            </Flex>
                          </div>
                          <div>
                            <Flex align="center" justify="center">
                              <img style={{ height: "200px"}} src="/image/mongo.png" />
                            </Flex>
                          </div>
                          <div>
                            <Flex align="center" justify="center">
                              <img style={{ height: "200px"}} src="/image/mysql.png" />
                            </Flex>
                          </div>
                          <div>
                            <Flex align="center" justify="center">
                              <img style={{ height: "200px"}} src="/image/github.png" />
                            </Flex>
                          </div>
                          <div>
                            <Flex align="center" justify="center">
                              <img style={{ height: "200px"}} src="/image/mvc.png" />
                            </Flex>
                          </div>
                        </Slider>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-3" justify="center">
          <Col span={23}>
            <Card className="dark">
              <CardBody>
                <Row className="mt-3">
                  <Col span={24}>
                    <p className="sub-title text-center">Experience</p>
                  </Col>
                </Row>
                <Row gutter={16} justify="center" className="mt-3">
                  {timelineData.map((item, index) => (
                    <Col key={index} md={23} sm={23} xs={23} lg={4} xl={4} className="mt-2">
                        <Flex justify="center">
                          <Card key={index} isPressable shadow="sm" onPress={() => handleExperience(item.id)} className="w-100">
                            <CardBody className="overflow-visible p-0">
                              <Image
                                alt={item.title}
                                className="w-full object-cover h-[140px]"
                                radius="lg"
                                shadow="sm"
                                src={item.image}
                                width="100%"
                              />
                              <Row className='mt-3' justify="center">
                                <Col span={23}>
                                  <Flex justify="center">
                                    <b className="text-center">{item.position}</b>
                                  </Flex>
                                </Col>
                              </Row>
                              <Row justify="center">
                                <Col span={23}>
                                  <p className="text-default-500 text-center">{item.company}</p>
                                </Col>
                              </Row>
                              <Row justify="center">
                                <Col span={23}>
                                  <p className="text-xs text-gray-400 text-center">{item.duration}</p>
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>
                        </Flex>
                      {/* <Card className="mt-4 w-48" onPress={() => handleExperience(item.id)} isPressable>
                        <CardBody className="text-center">
                          <Row className="mb-2">
                            <Col span={24}>
                              <img
                                src={item.image}
                                alt=""
                                style={{
                                  maxWidth: "100%",
                                  maxHeight: "100px",
                                  // height: "auto",
                                  display: "block",
                                  margin: "0 auto"
                                }}
                              />
                            </Col>
                          </Row>
                          <h4 className="font-semibold text-md mt=2">{item.position}</h4>
                          <p className="text-sm text-gray-500">{item.company}</p>
                          <p className="text-xs text-gray-400 mt-2">{item.duration}</p>
                        </CardBody>
                      </Card> */}
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row justify="center" className="mt-3">
          <Col span={23}>
            <Card className="dark">
              <CardBody>
                <Row justify="center" className="mt-3">
                  <Col>
                    <p className="sub-title">Project</p>
                  </Col>
                </Row>
                <Row gutter={24} className="mt-3">
                  {dataProject.map(project => (
                    <Col lg={8} xl={8} md={24} sm={24} xs={24} key={project.id} className="max-h mb-2">
                      <Card>
                        <CardBody>
                          <Row>
                            <Col span={24}>
                              <img src={project.image} className="object-cover rounded-xl" />
                            </Col>
                          </Row>
                          <Row className="mt-2">
                            <Col span={24}>
                              <Flex justify="center">
                                <p className="header">{project.title}</p>
                              </Flex>
                            </Col>
                          </Row>
                          <Row className='mt-2'>
                            <Col span={24}>
                              <p className="text-center">{project.description}</p>
                            </Col>
                          </Row>
                           
                          <Row justify="center" className="mt-3">
                            <Col>
                              <Button startContent={<InsertRowLeftOutlined />} onPress={() => handleProjectModal(project.id)}>Details</Button>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Modal isOpen={isOpen} size="5xl" onClose={onClose} className="dark" placement='center'>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">{dataSelected.title}</ModalHeader>
                  <ModalBody>
                      <Row>
                        <Col span={24}>
                          <img src={dataSelected.image} className="w-100" />
                        </Col>
                      </Row>
                      <Row className='mt-2'>
                        <Col span={24}>
                          <p className="text-center">{dataSelected.longDesc}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={24}>
                          <p className="text-center">Tech: {dataSelected.tech.map(item => item).join(", ") }</p>
                        </Col>
                      </Row>
                  </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>

        {/* modal experience */}

        <Modal isOpen={isExpModalOpen} size="5xl" onClose={onExpModalClose} className="dark" placement='center'>
          <ModalContent>
            {(onExpModalClose) => (
              <>
                {/* <ModalHeader className="flex flex-col gap-1">{expSelected.position + " | " + expSelected.company}</ModalHeader> */}
                  <ModalBody key={expSelected.id}>
                    <Row className="mt-2" gutter={32}>
                      <Col xl={5} lg={5} md={24} sm={24} xs={24}>
                        <img src={expSelected.image} className="w-100" />
                      </Col>
                      <Col xl={19} lg={19} md={24} sm={24} xs={24}>
                        <Row>
                          <Col>
                            <p className="header">{expSelected.position + " | " + expSelected.company}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p>{expSelected.duration}</p>
                          </Col>
                        </Row>
                        <Row>
                            <Col>
                              <ul className="list-disc pl-2" id={expSelected.id}>
                                {
                                  expSelected.details.map((item) => (
                                    <li className="mt-1">{item}</li>
                                  ))
                                }
                            </ul>
                          </Col>
                        </Row>
                        <Row className="mt-4">
                          <Col>
                                <p>Tech: </p>
                                {expSelected.tech.map(item => item).join(", ")}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onExpModalClose}>
                      Close
                    </Button>
                  </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}
