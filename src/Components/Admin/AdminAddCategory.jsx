import React, { useEffect, useState } from "react";
import avatar from "../../assets/images/avatar.png";
import { Col, Row, Spinner } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { createCategory } from "../../redux/actions/categoryAction";

function AdminAddCategory() {
  const dispatch = useDispatch();
  const [Img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setselectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setselectedFile(event.target.files[0]);
    }
  };
  const res = useSelector((state) => state.allCategory.category);
   console.log(res.data);
   
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name === "" || selectedFile === null) {
      console.log("من فضلك اكمل البيانات");
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);
    setLoading(true);
    setIsPress(true);
    await dispatch(createCategory(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setImg(avatar);
      setName("");
      setselectedFile(null);
      console.log("تم الانتهاء");
      setLoading(true);
      setTimeout(() => setIsPress(false), 1000)
    }
  }, [loading]);
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره التصنيف</div>
          <div>
            <label for="upload-photo">
              <img
                src={Img}
                alt="fzx"
                height="100px"
                width="120px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              onChange={onImageChange}
              id="upload-photo"
            />
          </div>

          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      {isPress ? (
        loading ? (
          <Spinner animation="border" />
        ) : (
          <h4> تم الانتهاء</h4>
        )
      ) : null}
    </div>
  );
}

export default AdminAddCategory;
