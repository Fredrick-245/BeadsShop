import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../../Loader/Loader";

export default function ProductForm({ add, edit }) {
    const [isLoading,setIsLoading] = useState(false)
  const [form, setForm] = useState({
    title: "",
    imageUrl: "",
    description: "",
    quantity: "",
    size: "",
    price: "",
    category: "",
  });
  const params = useParams();
  useEffect(() => {
    if (edit) {
      async function fetchProduct() {
        const res = await fetch(
          `http://localhost:800/products/getproduct/${params.id}`
        );
        const data = await res.json();
        setForm(data.data.product);
      }
      try{
        setIsLoading(true)
          fetchProduct();
          setIsLoading(false)
      } catch(err){
        alert('There was an error while editing the product')

      }
      //   }, [params.id]);
    }
  }, [edit, params.id]);

// submit form haandler
  async function submitFormHandler(e) {
    e.preventDefault();
    if (edit) {
      const update = window.confirm(
        "Are sure you want to update the selected item"
      );
      if (update) {
        const body = {
          id: params.id,
          form,
        };

        const updateItem = await fetch(
          `http://localhost:800/products/updateproduct`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }
          );
            setForm({
            title: "",
            imageUrl: "",
            description: "",
            quantity: "",
            size: "",
            price: "",
            category: "",
          })
          alert('Product updated succesfully')
        return;
      }
    }
    try {
      const data = await fetch("http://localhost:800/products/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      console.log(data);
      setForm({
        title: "",
        imageUrl: "",
        description: "",
        quantity: "",
        size: "",
        price: "",
        category: "",
      })
      alert('Product added successfully')
    } catch (err) {
      console.log(err);
    }
  }
    
  return (
    <div className="mt-[30px]">
      <h1 className="text-[20px]">
        {add ? "Add a product" : "Edit a product"}
      </h1>
      <div className="mt-[40px]">
        <form
          className="grid grid-cols-[form] gap-[10px]"
          onSubmit={submitFormHandler}
        >
          <label htmlFor="name" className="text-[16px]">
            Title:
          </label>
          <input
            className="py-[8px] px-[4px] outline-none text-[18px]"
            id="name"
            name="title"
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          ></input>
          <label htmlFor="url" className="text-[16px]">
            ImageUrl:
          </label>
          <input
            className="py-[8px] px-[4px] outline-none text-[18px]"
            id="url"
            name="url"
            value={form.imageUrl}
            onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
            type="text"
          ></input>
          <label htmlFor="description" className="text-[16px]">
            Description:
          </label>
          <input
            className="py-[8px] px-[4px] outline-none text-[18px]"
            id="description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            name="description"
            type="text"
          ></input>
          <label htmlFor="quantity" className="text-[16px]">
            Quantity:
          </label>
          <input
            className="py-[8px] px-[4px] outline-none text-[18px]"
            id="quantity"
            value={form.quantity}
            onChange={(e) => setForm({ ...form, quantity: e.target.value })}
            name="quantity"
            type="text"
          ></input>
          <label htmlFor="size" className="text-[16px]">
            Size:
          </label>
          <input
            className="py-[8px] px-[4px] outline-none text-[18px]"
            id="size"
            value={form.size}
            onChange={(e) => setForm({ ...form, size: e.target.value })}
            name="size"
            type="text"
          ></input>
          <label htmlFor="price" className="text-[16px]">
            Price:
          </label>
          <input
            className="py-[8px] px-[4px] outline-none text-[18px]"
            id="price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            name="price"
            type="text"
          ></input>
          <label htmlFor="category" className="text-[16px]">
            Category:
          </label>
          <select
            className="outline-none py-[6px] px-[3px] text-[1.8rem]"
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            value={form.category}
          >
            <option className="text-[1.4rem]">All</option>
            <option className="text-[1.4rem]">Crystall bracelets</option>
            <option className="text-[1.4rem]">Evil eye bracelets</option>
            <option className="text-[1.4rem]">Charm bracelets</option>
            <option className="text-[1.4rem]">Pearl bracelets</option>
            <option className="text-[1.4rem]">Matching bracelets</option>
          </select>
          {/*
          <input
            className="py-[8px] px-[4px] outline-none text-[18px]"
            id="category"
          
            name="category"
            type="text"
          ></input> */}
          <button
            className="mt-[40px] bg-[--secondary-100] mb-[40px] w-[20%] py-[10px] text-[18px] rounded-[8px] text-[#fff]"
            type="submit"
          >
            {edit ? "Edit" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
}
