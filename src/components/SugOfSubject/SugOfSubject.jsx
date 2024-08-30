import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectTitle from "../SectTitle/SectTitle";
import { motion } from "framer-motion";

const SugOfSubject = () => {
  const { data: suggestion, isLoading } = useQuery({
    queryKey: ["suggestion books list"],
    queryFn: async () => {
      const res = await axios("6th_suggestion.json");
      return res.data;
    },
  });

//   console.log(suggestion);

  return (
    <div className="p-8 md:p-0 md:ml-20 lg:ml-28 mt-20 md:mr-20 lg:mr-28 mb-20 ">
      <SectTitle title="Cst Subjects Suggestion" />
      {isLoading ? (
        <div className="flex justify-center my-20">
          <span className="loading loading-spinner text-accent"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          {suggestion.map((book) => (
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              key={book.id}
              className="rounded-2xl shadow-md card card-shadow sm:w-96 dark:bg-gray-50 dark:text-gray-800 p-3 "
            >
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center space-x-2">
                  <img
                    src={book.userImg}
                    alt=""
                    className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300"
                  />
                  <div className="-space-y-1">
                    <h2 className="text-sm font-semibold leading-none">
                      {book.userName}
                    </h2>
                    <span className="inline-block text-xs leading-none dark:text-gray-600">
                      {book.date}
                    </span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-black dark:text-gray-600">
                    Exam date: <br /> {book.exam_date}
                  </p>
                </div>
              </div>
              <img
                src={book.img}
                alt=""
                className="object-cover object-center w-full h-72 dark:bg-gray-500 rounded-lg"
              />
              <div className="p-3">
                <div className="space-y-3">
                  <div className="  flex flex-col flex-grow ">
                    <h2 className="card-title">
                      {book.subject_name}
                      <div className="badge bg-mainColor">
                        {book.subject_code}
                      </div>
                    </h2>
                    <div className="card-actions justify-end my-2">
                      <div className="badge badge-outline">#CST</div>
                      <div className="badge badge-outline">#6th</div>
                    </div>
                    <p className="mb-2 font-medium">
                      Teacher :{" "}
                      <span className="bg-gradient-to-r to-[#073b4c] from-[#118ab2] text-transparent bg-clip-text">
                        {book.subject_teacher_name}
                      </span>
                    </p>
                    <p className="text-sm text-gray-600">{book.description}</p>
                  </div>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SugOfSubject;
