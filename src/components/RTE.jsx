//RealTime Time Editor

import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  //control is the imp thing here
  return (
    // <Editor
    // initialValue='defaultvalue'
    // init ={
    //     {
    //         branding: false,
    //         height: 500,
    //         menubar: true,  
    //         plugins: [
    //             'advlist autolink lists link image charmap print preview anchor',
    //             'searchreplace visualblocks code fullscreen',
    //             'insertdatetime media table paste code help wordcount'
    //         ],
    //         toolbar: 'undo redo | formatselect | ' +
    //         'bold italic backcolor | alignleft aligncenter ' +
    //         'alignright alignjustify | bullist numlist outdent indent | ' +
    //         'removeformat | help',
    //     }
    // }
    // onEditorChange={onChange}
    // /> this can be custom made

    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" >
          {label}
        </label>
      )}
      <Controller
        name={name || "Content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            initialValue={defaultValue}
            init={{
                initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins:[
    "advlist", "anchor", "autolink", "charmap", "code", "fullscreen", 
    "help", "image", "insertdatetime", "link", "lists", "media", 
    "preview", "searchreplace", "table", "visualblocks", "accordion"
    ],
              toolbar:
                "undo redo | blockstyle |image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}
