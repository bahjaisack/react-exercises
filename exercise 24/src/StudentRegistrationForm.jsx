import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const STORAGE_KEY = "student_registration_draft";

const StudentRegistrationForm = () => {
  const getInitialValues = () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    return savedData
      ? JSON.parse(savedData)
      : {
          studentName: "",
          email: "",
          gradeLevel: "",
          subjects: [],
        };
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: getInitialValues(),
  });

  const watchedValues = watch();
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(watchedValues));
  }, [watchedValues]);

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", data);
    alert("Registration successful!\n" + JSON.stringify(data, null, 2));

    localStorage.removeItem(STORAGE_KEY);
    reset({
      studentName: "",
      email: "",
      gradeLevel: "",
      subjects: [],
    });
  };

  const handleReset = () => {
    localStorage.removeItem(STORAGE_KEY);
    reset({
      studentName: "",
      email: "",
      gradeLevel: "",
      subjects: [],
    });
  };

  const getInputClasses = (hasError) =>
    `w-full p-2 border rounded transition-colors focus:outline-none focus:ring-2 ${
      hasError
        ? "border-rose-500 bg-rose-50 focus:ring-rose-200 text-rose-900 placeholder-rose-300"
        : "border-gray-300 focus:border-rose-500 focus:ring-rose-100"
    }`;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Student Registration
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Student Name
          </label>
          <input
            {...register("studentName", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
            placeholder="John Doe"
            className={getInputClasses(!!errors.studentName)}
          />
          {errors.studentName && (
            <p className="text-rose-500 text-sm mt-1 flex items-center gap-1">
              <span>⚠️</span> {errors.studentName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            placeholder="student@example.com"
            className={getInputClasses(!!errors.email)}
          />
          {errors.email && (
            <p className="text-rose-500 text-sm mt-1 flex items-center gap-1">
              <span>⚠️</span> {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Grade Level
          </label>
          <select
            {...register("gradeLevel", {
              required: "Please select a grade",
            })}
            className={getInputClasses(!!errors.gradeLevel)}
          >
            <option value="">Select Grade</option>
            <option value="9">Grade 9</option>
            <option value="10">Grade 10</option>
            <option value="11">Grade 11</option>
            <option value="12">Grade 12</option>
          </select>
          {errors.gradeLevel && (
            <p className="text-rose-500 text-sm mt-1 flex items-center gap-1">
              <span>⚠️</span> {errors.gradeLevel.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Subjects Interest
          </label>
          <div
            className={`space-y-2 p-3 rounded-md transition-colors ${
              errors.subjects ? "bg-rose-50 border border-rose-200" : ""
            }`}
          >
            <label className="flex items-center text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                {...register("subjects", {
                  required: "Select at least one subject",
                })}
                value="math"
                className="mr-2 h-4 w-4 accent-rose-500 rounded"
              />
              Mathematics
            </label>
            <label className="flex items-center text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                {...register("subjects")}
                value="science"
                className="mr-2 h-4 w-4 accent-rose-500 rounded"
              />
              Science
            </label>
            <label className="flex items-center text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                {...register("subjects")}
                value="english"
                className="mr-2 h-4 w-4 accent-rose-500 rounded"
              />
              English
            </label>
          </div>
          {errors.subjects && (
            <p className="text-rose-500 text-sm mt-1 flex items-center gap-1">
              <span>⚠️</span> {errors.subjects.message}
            </p>
          )}
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-rose-500 text-white py-2 px-4 rounded font-medium hover:bg-rose-600 transition duration-150 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </>
            ) : (
              "Register"
            )}
          </button>

          <button
            type="button"
            onClick={handleReset}
            disabled={isSubmitting}
            className="bg-gray-100 text-gray-700 py-2 px-4 rounded font-medium hover:bg-gray-200 transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentRegistrationForm;
