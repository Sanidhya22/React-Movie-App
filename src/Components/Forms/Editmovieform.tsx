import * as React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DatePickerField from "./DatePicker";
import { GrClose } from "react-icons/gr";
import "./Editmovieform.scss";

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
export const Editmovieform: React.FC<Editmovieformprop> = ({
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
    console.log("Form data", values);
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
      <h1>{FormTitle}</h1>
      <GrClose className="close" onClick={handleDeleteFalse} />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <label htmlFor="Title">Title</label>
          <Field id="title" name="title" placeholder="Title" />

          <label htmlFor="release_date">Release Date</label>
          <DatePickerField name="release_date" />

          <label htmlFor="firstName">URL</label>
          <Field id="poster_path" name="poster_path" placeholder="URL" />

          <label htmlFor="firstName">Rating</label>
          <Field id="vote_average" name="vote_average" placeholder="Rating" />

          <label htmlFor="firstName">Runtime</label>
          <Field id="runtime" name="runtime" placeholder="Movie Time" />

          <label htmlFor="firstName">Overview</label>
          <Field
            component="textarea"
            id="overview"
            name="overview"
            placeholder="Movie Overview"
          ></Field>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
export default Editmovieform;
