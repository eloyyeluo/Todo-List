import React from "react"
import ReactDOM from "react-dom"
import { createContext, useContext } from "react";
import { autorun, makeAutoObservable } from "mobx";
import { firestoreReadText } from "./FirebaseAPI.ts";

class Datastore {
    taskList
    constructor() {
        makeAutoObservable(this);
        taskList = [];
    }
    resetList() {
        this.taskList = [];
    }
    addToList(id, text) {
        task = {id:id, text:text}
        this.taskList.push(task);
        console.log(`add task: ${task}`);
    }
    fetchLatestList() {
        resetList();
        firestoreReadText((id, text, err) => {
            this.addToList({id:id, text:text});
        });
    }
}
export const rootStore = new RootStore()

export const StoreContext = createContext(rootStore)
export const StoreProvider = StoreContext.Provider
export const useRootStore = () => useContext(StoreContext)
