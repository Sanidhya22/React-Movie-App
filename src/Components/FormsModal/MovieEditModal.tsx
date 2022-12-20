import * as React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DatePickerField from "./DatePicker";
import { GrClose } from "react-icons/gr";
import "./MovieEditModal.scss";
import DynamicBtn from "../Buttons/DynamicBtn";
import { SetModal } from "../../redux/actions/MovieAction";
import { AppState, Dispatch } from "../../redux/reducers/RootReducer";
import { useDispatch, useSelector } from "react-redux";
import { Movie } from "../../types/Types";

interface MyFormValues {
  title?: string;
  release_date?: string;
  poster_path?: string;
  vote_average?: number;
  runtime?: number;
  overview: string;
}
const MovieEditModal: React.FC = () => {
  const dispatch: Dispatch = useDispatch();
  const Movie = useSelector((state: AppState) => state.Popup.ModalMovie);
  // const dropdownOptions = [
  //   { key: "Select Genere", value: "" },
  //   { key: "React", value: "react" },
  //   { key: "Angular", value: "angular" },
  // ];
  console.log("Check");
  const FormTitle = Object.keys(Movie).length == 0 ? "ADD Movie" : "EDIT Movie";
  const { title, release_date, poster_path, vote_average, runtime, overview } =
    Movie;
  const initialValues = {
    title: title || "",
    release_date: release_date || "",
    poster_path: poster_path || "",
    vote_average: vote_average || 0.0,
    runtime: runtime || 0,
    overview: overview || "",
  };
  const onSubmit = (values: any) => {
    console.log("Form data", values);
  };
  const handelclose = () => {
    dispatch(SetModal({}, ""));
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    // release_date: Yup.date().required("Required").nullable(),
    poster_path: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .required("Please enter url"),
    vote_average: Yup.number().required("The number is required"),
    overview: Yup.string().required("Required"),
    // genre: Yup.string().required("Required"),
    runtime: Yup.number().required("The number is required"),
  });

  return (
    <div className="FormModalContaner">
      <h1 className="Form-Title">{FormTitle}</h1>
      <GrClose className="close" onClick={handelclose} />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        // validationSchema={validationSchema}
      >
        <Form>
          <div className="Two-Field">
            <div className="Label-Input">
              <label className="Label-Title" htmlFor="Title">
                Title
              </label>
              <Field
                className="Left-Input"
                id="title"
                name="title"
                placeholder="Title"
                // onChange={() => {
                //   console.log("on change");
                // }}
                // value={values.title}
              />
            </div>
          </div>
          <div className="Two-Field">
            <div className="Label-Input">
              <label className="Label-Title" htmlFor="firstName">
                URL
              </label>
              <Field
                className="Left-Input"
                id="poster_path"
                name="poster_path"
                placeholder="URL"
                // onChange={handleChange}
                // value={values.poster_path}
              />
            </div>

            <div className="Label-Input">
              <label className="Label-Title" htmlFor="firstName">
                Rating
              </label>
              <Field
                className="Right-Input"
                id="vote_average"
                name="vote_average"
                placeholder="Rating"
                // onChange={handleChange}
                // value={values.vote_average}
              />
            </div>
          </div>

          <div className="Two-Field">
            <div className="Label-Input">
              <label className="Label-Title" htmlFor="firstName">
                Runtime
              </label>
              <Field
                className="Right-Input"
                id="runtime"
                name="runtime"
                placeholder="Movie Time"
                // onChange={handleChange}
                // value={values.runtime}
              />
            </div>
          </div>
          <div className="Label-Input">
            <label className="Label-Title" htmlFor="firstName">
              Overview
            </label>
            <Field
              className="Bottom-field"
              component="textarea"
              id="overview"
              name="overview"
              placeholder="Movie Overview"
              // onChange={handleChange}
              // value={values.overview}
            ></Field>
          </div>
          {/* <DynamicBtn
              type="submit"
              styleClass={"search-btn"}
              btnName={"Submit"}
              btnFunction={onSubmit}
            /> */}
          <button type="submit">Submit</button>
          {/* 
            <button
              onClick={() => {
                setValues(Movie);
              }}
              type="submit"
            >
              Reset{" "}
            </button> */}
        </Form>
      </Formik>
    </div>
  );
};
export default MovieEditModal;
