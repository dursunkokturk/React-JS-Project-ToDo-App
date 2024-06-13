import React, { useState } from 'react';

// Yapilan Islemleri props Parametresi Ile App.js Dosyasindaki
export default function CreateTask(props) {
    const [task, setTask] = useState({
        title: '',
        content: '',
    });

    // input ve textArea Alanlarina Girilen Degerleri
    // evet Parametresi Uzerinden Aliyoruz
    function detectChange(event) {
        const { name, value } = event.target;

        // input ve textArea Alanlarina Data Girme Islemi Bitene Kadar
        // Karakter Girildikce
        // Her Karakteri Alma Islemini Durduruyoruz
        // Yeni Bir Task Ekleme Islemi Yapildiginda
        // Onceki Task lar Ile Birlestiriyoruz 
        setTask((prevTask) => {
            return {
                ...prevTask,
                [name]: value,
            };
        });
    }

    // form Icinde Girilen Bilgileri
    // Butona Tiklandiginda
    // event Parametresi Uzerinden Aliyoruz
    // onAdd Method Icinde task Parametresi Ile
    // Ekleme Islemini Yapiyoruz
    // Ekleme Isleminin Tam Olarak Yapilmasi Icin
    // App.js Dosayasinda App Function Icinde Islem Yapiyoruz
    function submitTask(event) {
        props.onAdd(task);
        setTask({
            title: '',
            content: '',
        });
        event.preventDefault();
    }

    return (
        <div className="todoDivArea">
            <form className="todoDiv">
                <input type="text"

                        // value Attribute Uzerinden Alinan Degeri
                        // detectChange Fonksiyonuna Gonderiyoruz
                        onChange={detectChange}
                        className="form-control todoText mb-3"
                        name="title"

                        // title Alanina Girilen Degeri Aliyoruz
                        value={task.title}
                        placeholder="Başlık"
                />

                <textarea name="content"

                          // title Alanina Girilen Degeri Aliyoruz
                          value={task.content}

                          // value Attribute Uzerinden Alinan Degeri
                          // detectChange Fonksiyonuna Gonderiyoruz
                          onChange={detectChange}
                          className="form-control todoText mb-3"
                          rows={3}
                          placeholder="İşinizi Yazınız"
                ></textarea>

                <button className="btn btn-primary todoButton" onClick={submitTask}>
                    Ekle
                </button>
            </form>
        </div>
    );
}