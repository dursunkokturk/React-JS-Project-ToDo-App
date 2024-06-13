import Task from './Task';
import { useState } from 'react';
import './App.css';
import CreateTask from './CreateTask';
import Header from './Header';
import Footer from './Footer';

function App() {
    const [tasks, setTasks] = useState([]);

    // CreateTask.jsx Dosyasinda Yapilan 
    // Ekleme Islemini newTask Parametresi Uzerinden Aliyoruz
    // setTasks Methodu Ile 
    // Yeni Bir Task Ekleme Islemi Yapildiginda
    // Onceki Task lar Ile Birlestiriyoruz 
    const addTask = (newTask) => {
        debugger;
        setTasks((prevTask) => {
            return [...prevTask, newTask];
        });
    };

    // Silme Isleminin Yapilacagi Task a Tiklandiginda
    // Id Bilgisini deleteTask Fonksiyonuna Gonderiyoruz
    // Silme Isleminden Sonra 
    // setTasks Method Icinde Task Array Icinde Yapilan Tarama Sonucunda 
    // Geriye Kalan Task lari Listeliyoruz
    const deleteTask = (id) => {
        debugger;
        setTasks((prevTask) => {
            return prevTask.filter((taskItem, index) => {
                return index !== id;
            });
        });
    };
    return (
        <div className="App">
            <Header />
            <CreateTask onAdd={addTask} />
            <div className="container">
                <div className="row my-5">

                    {/* Task Array Icinde Map Method Ile Geziyoruz
                        Task lari Ve Index Degerlerini Aliyoruz */}
                    {tasks.map((taskItem, index) => {
                        return (

                            // Task Component Icinde index Degerleri Kullanarak
                            // Yazdirilacak Task larin Birbirinden Farkli Oldugunu Belirtmek Gerekiyor
                            // Eklenen Task i Silmek Icin Index Numarasini Ayni Zamanda Id Olarak Kullaniyoruz
                            // Eklenen Task in title ve content Attribute larini Yaziyoruz
                            // Task Eklendiginde Yaninda Otomatik Olarak Silme Isleminin Gorunmesini Sagliyoruz
                            // Silme Islemini Task.jsx Dosyasinda Yapiyoruz
                            <Task key={index}
                                  id={index}
                                  title={taskItem.title}
                                  content={taskItem.content}
                                  delete={deleteTask}
                            />
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;