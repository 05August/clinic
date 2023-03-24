import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setPerLoading, setSkeleton } from "redux/global.slice";
import { MdRemoveCircleOutline } from "react-icons/md";
import clientServer from "server/clientServer";
import { DEPARTMENTS } from "constants/constantsHomePage";
import ClinicCard from "components/Common/ClinicCard";
import { Col, Container, Row } from "react-bootstrap";
import { Pagination } from "antd";

const Clinic = () => {
  const [searchParams] = useSearchParams();
  const [selectedDepartment, setSelectedDepartment] = useState([]);

  const [totalClinic, setTotalClinic] = useState([]);
  const [clinicList, setClinicList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(setSkeleton(true));
        const getResponseClinic = await clientServer.get(
          `clinicList?search=${searchParams.get("keyword") || ""}`
        );

        setTotalClinic(getResponseClinic.data);
        setSelectedDepartment([]);
      } catch (error) {
        console.error(error);
      } finally {
        dispatch(setSkeleton(false));
      }
    }
    fetchData();
  }, [searchParams.get("keyword" || "")]);

  useEffect(() => {
    dispatch(setPerLoading(true));
    const data =
      selectedDepartment.length > 0
        ? totalClinic.filter((item) => {
            return selectedDepartment
              .map((item) => item.toLocaleLowerCase())
              .includes(item.department);
          })
        : totalClinic;
    setClinicList(data);
    setCurrentPage(1);
    setTimeout(() => {
      dispatch(setPerLoading(false));
    }, 500);
  }, [selectedDepartment]);

  const handleResetSlected = () => {
    setSelectedDepartment([]);
  };

  const renderRemoveSelectedFilter = () => {
    const handleRemoveItem = (value) => {
      setSelectedDepartment(selectedDepartment.filter((item) => item !== value));
    };

    return (
      <div className="active-filter">
        {selectedDepartment.map((item) => {
          return (
            <div
              className="remove-selected"
              key={`${item}-filter`}
              onClick={() => handleRemoveItem(item)}
            >
              <span>
                {item}
                <MdRemoveCircleOutline />
              </span>
            </div>
          );
        })}
        <div className="remove-selected" onClick={() => handleResetSlected()}>
          <span>Clear All</span>
        </div>
      </div>
    );
  };

  const renderCheckBoxFilter = () => {
    return (
      <div className="filter-department-container">
        {DEPARTMENTS.map((item, index) => (
          <div key={item.title} className="filter-department-item">
            <input
              type="checkbox"
              name="filter-department"
              id={`option-${index}`}
              value={item.title}
              checked={selectedDepartment.includes(item.title)}
              onChange={() => {
                selectedDepartment.includes(item.title)
                  ? setSelectedDepartment(
                      selectedDepartment.filter((element) => element !== item.title)
                    )
                  : setSelectedDepartment([...selectedDepartment, item.title]);
              }}
              className=""
            />
            <label htmlFor={`option-${index}`}>{item.title}</label>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="clinic-page">
      <Container>
        <Row>
          <Col xl={3} lg={4} md={12} className="side-bar-clinic">
            <div className="side-bar-filter">
              <h6>Filter</h6>
              <div className="facets-header">
                <span>
                  {selectedDepartment.length > 0 && `${clinicList.length} of `}
                  {`${totalClinic.length} Clinic`}
                </span>
                <span>
                  {searchParams.get("keyword") &&
                    ` results found for "${searchParams.get("keyword")}" `}
                </span>
              </div>
              {selectedDepartment.length > 0 && renderRemoveSelectedFilter()}
            </div>

            <div className="side-bar-filter filter-department">
              <h6>Department</h6>
              <div className="facets-header">
                <span>{selectedDepartment.length} Selected</span>
                <div
                  className="facets-remove"
                  onClick={() => handleResetSlected()}
                  style={{ cursor: "pointer" }}
                >
                  Reset
                </div>
              </div>
              {renderCheckBoxFilter()}
            </div>
          </Col>
          <Col xl={9} lg={8} md={12}>
            <div className="clinic-layout">
              {clinicList.length > 0 &&
                clinicList
                  .slice((currentPage - 1) * 6, (currentPage - 1) * 6 + 6)
                  .map((item, index) => (
                    <ClinicCard
                      key={`item-clinic-${index}-${item.id}`}
                      data={item}
                      type="hidden"
                    />
                  ))}
            </div>
            <div className="panigation-clinic">
              <Pagination
                current={currentPage}
                onChange={(page) => {
                  window.scrollTo(0, 0);
                  setCurrentPage(page);
                }}
                pageSize={6}
                total={clinicList.length > 0 && clinicList.length}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Clinic;
