import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { FaArrowRightLong } from 'react-icons/fa6';
import { LuFileVideo } from 'react-icons/lu';
import { Link, useNavigate } from 'react-router-dom';
import ProgressBar from '../Components/ProgressBar';
import Video from '../Components/Video';

const initialData = [
    { id: 'A', text: 'güclü tərəflərimdən istifadə edə bilmək' },
    { id: 'F', text: 'gördüyüm işdə uğurlu olmaq' },
    { id: 'K', text: 'doğrularıma zidd olmayan işləri görmək' },
    { id: 'P', text: 'iş prosesində dəstək olacaq rəhbərin olması' },
    { id: 'B', text: 'şirkət tərəfindən hüquqlarımın qorunması' },
    { id: 'G', text: 'maaşımın digər işçilərdən yüksək olması' },
    { id: 'L', text: 'gördüyüm işə görə tanınmaq' },
    { id: 'Q', text: 'işi öyrədəcək rəhbərin olması' },
    { id: 'C', text: 'hər zaman məşğul olmaq' },
    { id: 'J', text: 'tək işləmək' },
    { id: 'M', text: 'öz qərarlarımı müstəqil qəbul etmək' },
    { id: 'R', text: 'hər gün fərqli işlər görmək' },
    { id: 'D', text: 'irəliləməyim üçün şəraitin olması' },
    { id: 'I', text: 'öz idealarımı sınaqdan keçirmək' },
    { id: 'N', text: 'iş yerimin sabit olması' },
    { id: 'S', text: 'yaxşı iş şəraitinin olması' },
    { id: 'E', text: 'başqa şəxslərə istiqamət verə bilmək' },
    { id: 'H', text: 'iş yoldaşlarımla yaxşı münasibətin olması' },
    { id: 'O', text: 'başqa insanlara faydalı olmaq' },
    { id: 'T', text: 'işimi müdaxilə olmadan planlamaq' }
];



const initialCarts = {
    5: { number: 5, title: 'Ən əhəmiyyətli', items: [] },
    4: { number: 4, title: 'Əhəmiyyətli', items: [] },
    3: { number: 3, title: 'Orta dərəcədə əhəmiyyətli', items: [] },
    2: { number: 2, title: 'Az əhəmiyyətli', items: [] },
    1: { number: 1, title: 'Ən az əhəmiyyətli', items: [] },
};


const Test = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [fullfiled, setFullfiled] = useState([]); // State olaraq saxlanılır
    const color = '#032843';
    const [cards, setCards] = useState(() => {
        const storedData = localStorage.getItem('cards');
        return storedData ? JSON.parse(storedData) : initialData;
    });

    const [carts, setCarts] = useState(() => {
        const storedData = localStorage.getItem('test');
        return storedData ? JSON.parse(storedData) : initialCarts;
    });

    useEffect(() => {
        localStorage.setItem('cards', JSON.stringify(cards));
    }, [cards]);

    useEffect(() => {
        localStorage.setItem('test', JSON.stringify(carts));

        // Fullfiled massivi yenilənir
        const newFullfiled = Object.values(carts)
            .filter((item) => item.items.length === 4)
            .map((item) => item.number);
        setFullfiled(newFullfiled);
    }, [carts]);

    const [areAllCartsFull, setAreAllCartsFull] = useState(null);

    const checkCartFullness = () => {
        const full = Object.values(carts).every((cart) => cart.items.length === 4);
        setAreAllCartsFull(full);
    };

    const onDragEnd = (result) => {
        const { source, destination } = result;
        if (!destination) return;
        if (source.droppableId === destination.droppableId && source.index === destination.index) return;

        if (source.droppableId === 'cards' && destination.droppableId !== 'cards') {
            const item = cards[source.index];
            const newCarts = { ...carts };

            if (newCarts[destination.droppableId].items.length < 4) {
                newCarts[destination.droppableId].items.push(item);
                const newCards = [...cards];
                newCards.splice(source.index, 1);
                setCards(newCards);
                setCarts(newCarts);
            }
        } else if (source.droppableId !== 'cards' && destination.droppableId === 'cards') {
            const newCarts = { ...carts };
            const item = newCarts[source.droppableId].items[source.index];
            newCarts[source.droppableId].items.splice(source.index, 1);
            setCards([...cards, item]);
            setCarts(newCarts);
        } else if (source.droppableId !== 'cards' && destination.droppableId !== 'cards') {
            const newCarts = { ...carts };
            const item = newCarts[source.droppableId].items[source.index];

            if (newCarts[destination.droppableId].items.length < 4) {
                newCarts[source.droppableId].items.splice(source.index, 1);
                newCarts[destination.droppableId].items.push(item);
                setCarts(newCarts);
            }
        }
    };

    const handleNavigate = () => {
        const check = Object.values(carts).every((cart) => cart.items.length === 4);
    
        if (check) {
            setAreAllCartsFull(true);
            navigate('/education');
        } else {
            setAreAllCartsFull(false);
        }
    };

    return (
        <div className="bg-[#003C67] py-20">
            <div className="wrapper">
                <ProgressBar i={2} color={color} />
                <div className="text-white mt-9">
                    <h1 className="text-xl">Cümləni tamamlayın</h1>
                    <p className="font-bold text-[32px]">İdeal/gələcək iş mühitində mənim üçün önəmlidir...</p>
                </div>
                <DragDropContext onDragEnd={onDragEnd}>
                    <div>
                        <div className="py-12">
                            <p className="text-lg text-white">Kartlar</p>
                            <Droppable droppableId="cards">
                                {(provided) => (
                                    <div
                                        className={`grid grid-cols-5 gap-x-10`}
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                    >
                                        {cards.map((item, i) => (
                                            <Draggable key={item.id} draggableId={item.id} index={i}>
                                                {(provided) => (
                                                    <div
                                                        className="bg-white rounded-lg py-2.5 px-5 mt-4"
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <p className="text-[#0257BF]">{item.text}</p>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </div>
                        <div className="grid grid-cols-5 gap-x-10 pt-12">
                            {Object.keys(carts).map((key) => (
                                <Droppable key={key} droppableId={key} direction="vertical">
                                    {(provided) => (
                                        <div
                                        id={key}
                                        className={`rounded-lg py-5 px-3 mt-4 h-[430px] ${
                                            fullfiled.includes(+key) ? 'bg-green-500' :
                                            areAllCartsFull === false && carts[key].items.length < 4 ? 'bg-[#FF3AA4]' : 'bg-[#7C81FF]'
                                        }`}
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                    >
                                            <div className="flex items-center gap-1">
                                                <div className="w-3/12">
                                                    <span className="text-white bg-[#003C67] w-11 h-11 rounded-full flex justify-center items-center font-bold text-xl">
                                                        {carts[key].number}
                                                    </span>
                                                </div>
                                                <p className="text-[#003C67] font-bold w-9/12">{carts[key].title}</p>
                                            </div>
                                            <div className="mt-6">
                                                {carts[key].items.map((item, i) => (
                                                    <Draggable key={item.id} draggableId={item.id} index={i}>
                                                        {(provided) => (
                                                            <div
                                                                className="bg-white rounded-lg py-2.5 px-5 mt-4"
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                            >
                                                                <p className="text-[#0257BF]">{item.text}</p>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                            </div>
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            ))}
                        </div>
                    </div>
                </DragDropContext>

                <div className="w-full flex justify-center gap-9 pt-14">
                    <button
                        onClick={() => setShow(true)}
                        className="bg-[#094F81] text-white font-medium rounded-lg py-4 px-6 mt-4 w-72 flex items-center justify-center gap-2.5"
                    >
                        <LuFileVideo className="text-white" />
                        Təlimat videosuna bax
                    </button>
                    <button
                        onClick={() => handleNavigate()}
                        className="bg-white rounded-lg text-[#094F81] font-medium py-4 px-3 mt-4 w-72 flex items-center justify-center gap-2.5"
                    >
                        Növbəti
                        <FaArrowRightLong className="text-[#094F81]" />
                    </button>
                </div>
            </div>
            <Video setShow={setShow} show={show} />
        </div>
    );
};

export default Test;

