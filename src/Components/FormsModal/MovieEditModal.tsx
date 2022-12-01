import * as React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DatePickerField from "./DatePicker";
import { GrClose } from "react-icons/gr";
import "./MovieEditModal.scss";
import DynamicBtn from "../Buttons/DynamicBtn";

interface MyFormValues {
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  runtime: number;
  overview: string;
}
type Editmovieformprop = {
  movieid: number | null;
  handleDeleteFalse: () => void;
};
const MovieEditModal: React.FC<Editmovieformprop> = ({
  movieid,
  handleDeleteFalse,
}) => {
  const dropdownOptions = [
    { key: "Select Genere", value: "" },
    { key: "React", value: "react" },
    { key: "Angular", value: "angular" },
  ];
  console.log(movieid);
  const FormTitle = movieid ? "EDIT Movie" : "ADD Movie";
  const initialValues: MyFormValues = {
    title: "",
    release_date: "08/02/1999",
    poster_path: "",
    vote_average: 0.0,
    runtime: 0,
    overview: "",
  };
  const onSubmit = (values: any) => {
    console.log("Form data", values.title);
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    release_date: Yup.date().required("Required").nullable(),
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
      <GrClose className="close" onClick={handleDeleteFalse} />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
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
              />
            </div>
            <div className="Label-Input">
              <label className="Label-Title" htmlFor="release_date">
                Release Date
              </label>
              <DatePickerField className="Right-Input" name="release_date" />
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
            ></Field>
          </div>
          <DynamicBtn
            styleClass={"search-btn"}
            btnName={"Submit"}
            btnFunction={onSubmit}
          />
          {/* <button type="submit">Submit</button> */}
        </Form>
      </Formik>
    </div>
  );
};
export default MovieEditModal;
