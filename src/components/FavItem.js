import React from "react";
import { removeFav } from "../actions";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const warning = () => toast("FAVORİLERDEN ÇIKARDINIZ :)");

function FavItem({ title }) {
  const dispatch = useDispatch();
  return (
    <div className="bg-white shadow hover:shadow-lg p-3 pl-5 flex items-center group transition-all">
      <img src={title} />
      <button
        onClick={() => {
          dispatch(removeFav(title.id));
          warning();
        }}
        className="transition-all px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100"
      >
        Çıkar
      </button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default FavItem;
