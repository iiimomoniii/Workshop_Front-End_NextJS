import { NextRequest, NextResponse } from "next/server"

type Job = {
    id?: string;
    message: string;
}

let todoList: Job[] = [];
let count = 0;

//Query Data
export async function GET(request: NextRequest): Promise<any>{
    const url = new URL(request.url);

    const action = url.searchParams.get("actions");
    if (action == "reset") {
        todoList=[];
    }
    return NextResponse.json(todoList);
}

//Insert Data
export async function POST(request: NextRequest): Promise<any>{
    const {message}: Job = await request.json();

    count++;
    todoList = [...todoList,{ id: count.toString(),message}];
    return NextResponse.json({result:"ok"})
}