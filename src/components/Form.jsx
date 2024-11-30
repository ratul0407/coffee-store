import { useEffect, useState } from "react";

function Form({ handleSubmit, data }) {
  const [formData, setFormData] = useState([]);
  useEffect(() => {
    fetch("/form_data.json")
      .then((res) => res.json())
      .then((data) => setFormData(data));
  }, []);
  return (
    <form
      onSubmit={handleSubmit}
      className="font-raleway grid grid-cols-2 gap-y-4 gap-x-8 text-[#1B1A1A]"
    >
      {/* name input */}
      {formData.map((input, index, arr) => {
        console.log(input);
        return (
          <div
            key={index}
            className={`label-control ${
              index === arr.length - 1 && "col-span-2"
            }`}
          >
            <label className="label">{input}</label>
            <input
              type="text"
              className="input"
              placeholder={`Enter coffee ${input} ${
                index === arr.length - 1 ? "URL" : ""
              }`}
              name={input.toLowerCase()}
              defaultValue={data?.[input.toLowerCase()]}
            />
          </div>
        );
      })}
      <div className="grid col-span-2">
        <button className="btn-custom border-2 rounded-lg border-btn-color ">
          Add Coffee
        </button>
      </div>
    </form>
  );
}

export default Form;
