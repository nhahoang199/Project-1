import React from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ButtonBack } from "../Common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    ResultItem,
    NotFound,
    DeleteButton,
    DeleteSuccess,
} from "./SubComponents";
import {
    faMagnifyingGlass,
    faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { SubjectData } from "../../../../DummyData";

export default function Search(props: any) {
    const param = useParams();
    const [data, setData] = useState(SubjectData);
    const [inputValue, setInputValue] = useState("");
    const [isSearch, setIsSearch] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [isDeleteComponent, setIsDeleteComponent] = useState(false);
    const [targetItem, setTargetItem] = useState(SubjectData[0]);
    const [onDelete, setOnDelete] = useState(SubjectData[0]);
    const [isLoading, setIsLoading] = useState(false);
    const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (param.component === "delete") {
            setIsDeleteComponent(true);
        }
    }, [param.component]);
    console.log(param);
    const handleOnchange = function (value: string) {
        setIsSearch(true);
        setInputValue(value);
    };
    const searchValue = function () {
        let a = SubjectData.filter((item) => {
            return item.title.toLowerCase().includes(inputValue);
        });
        setData(a);
    };
    const clearInputValue = function () {
        inputRef.current?.focus();
        setInputValue("");
        setIsSearch(false);
        setIsEmpty(false);
    };
    const targetDelete = function (item: any) {
        console.log(item);
        setTargetItem(item);
        setIsDelete(true);
    };

    const deleteItem = async function () {
        setIsDelete(false);
        setOnDelete(targetItem);
        let newData = data.filter((e) => {
            return e.id !== targetItem.id;
        });
        await setData(newData);
        setIsDeleteSuccess(true);
        setTimeout(() => {
            setIsDeleteSuccess(false);
        }, 2000);
    };
    useEffect(() => {
        searchValue();
        if (inputValue.trim() === "") {
            setIsSearch(false);
            setIsEmpty(false);
        }
        if (isSearch && data.length === 0) {
            setIsEmpty(true);
        }
    }, [inputValue]);
    return (
        <div
            className="search"
            style={props.id === 3 || props.id === 4 ? { display: "block" } : {}}
        >
            <DeleteSuccess
                onDelete={onDelete}
                isDeleteSuccess={isDeleteSuccess}
            />
            <div className="search__wrap">
                <div className="search__wrap__title">Tìm kiếm</div>
                <div className="search__wrap__bar"></div>
                <div className="search__wrap__box">
                    <FontAwesomeIcon
                        className="search__wrap__box__icon"
                        icon={faMagnifyingGlass}
                    />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Nhập tên hoặc mã môn học "
                        className="search__wrap__box__input"
                        value={inputValue}
                        onChange={(e) => handleOnchange(e.target.value)}
                    ></input>
                    <FontAwesomeIcon
                        className="search__wrap__box__clear"
                        icon={faCircleXmark}
                        onClick={clearInputValue}
                        style={
                            isSearch
                                ? { display: "block" }
                                : { display: "none" }
                        }
                    />
                    {/* <FontAwesomeIcon
                        className="search__wrap__box__loading"
                        icon={faSpinner}
                        style={
                            isLoading
                                ? { display: "block" }
                                : { display: "none" }
                        }
                    /> */}
                </div>
                <div
                    className="result__items"
                    style={
                        isSearch === false
                            ? { display: "none" }
                            : { display: "block" }
                    }
                >
                    {data.map((item, index) => {
                        return (
                            <ResultItem
                                item={item}
                                key={index}
                                targetDelete={targetDelete}
                                isDelete={isDelete}
                                targetItem={targetItem}
                                isDeleteComponent = {isDeleteComponent}
                            />
                        );
                    })}
                </div>
                <NotFound isEmpty={isEmpty} />
            </div>
            <div className="search__button">
                <DeleteButton isDelete={isDelete} deleteItem={deleteItem} />
                <ButtonBack />
            </div>
        </div>
    );
}
