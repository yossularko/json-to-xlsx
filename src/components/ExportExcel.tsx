"use client";

import React, { useRef, useState } from "react";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const ExcelExport = () => {
  const [isLoading, setIsloading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsloading(true);

    const filename = e.currentTarget["filename"].value;
    const file = e.currentTarget["file"].files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);

        const worksheet = XLSX.utils.json_to_sheet(json);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        const excelBuffer = XLSX.write(workbook, {
          bookType: "xlsx",
          type: "array",
        });
        const blob = new Blob([excelBuffer], {
          type: "application/octet-stream",
        });
        saveAs(blob, `${filename}.xlsx`);

        setTimeout(() => {
          formRef.current?.reset();
          setIsloading(false);
        }, 1000);
      } catch (error) {
        console.error("Error parsing JSON:", error);
        setIsloading(false);
      }
    };

    reader.readAsText(file);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-6"
    >
      <div className="grid items-center gap-1.5">
        <Label htmlFor="filename">File Name</Label>
        <Input
          id="filename"
          name="filename"
          type="text"
          placeholder="enter filename"
          required
          minLength={3}
          maxLength={50}
        />
      </div>
      <div className="grid items-center gap-1.5">
        <Label htmlFor="file">Picture</Label>
        <Input id="file" name="file" type="file" required />
      </div>
      <Button type="submit" disabled={isLoading}>
        Export to Excel
      </Button>
    </form>
  );
};

export default ExcelExport;
