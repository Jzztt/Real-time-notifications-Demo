@extends('layouts.app')

@section('content')


<div class="board">
    <form id="todo-form" method="POST">
        <input type="text" placeholder="New TODO..." id="todo-input" name="title" />
        <button type="submit">Add +</button>
    </form>

    <div class="lanes">
        <div class="swim-lane" id="todo-lane">
            <h3 class="heading">TODO</h3>

            <div class="task d-flex justify-content-between align-items-center" draggable="true">
                <span>
                    Research
                </span>
                <div class="action d-flex align-items-center gap-3">
                    <i class="fa-solid fa-gear"></i>
                    <button class="delete-ticket border-0 bg-transparent">
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </div>
            </div>
            <div class="task d-flex justify-content-between align-items-center" draggable="true">
                <span>
                    Coding
                </span>
                <div class="action d-flex align-items-center gap-3">
                    <i class="fa-solid fa-gear"></i>
                    <button class="delete-ticket border-0 bg-transparent">
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </div>
            </div>
        </div>

        <div class="swim-lane">
            <h3 class="heading">Doing</h3>

            <div class="task d-flex justify-content-between align-items-center" draggable="true">
                <span>
                    Analysis
                </span>
                <div class="action d-flex align-items-center gap-3">
                    <i class="fa-solid fa-gear"></i>
                    <button class="delete-ticket border-0 bg-transparent">
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </div>
            </div>
        </div>

        <div class="swim-lane">
            <h3 class="heading">Done</h3>

            <div class="task d-flex justify-content-between align-items-center" draggable="true">
                <span>
                    User Testing
                </span>
                <div class="action d-flex align-items-center gap-3">
                    <i class="fa-solid fa-gear"></i>
                    <button class="delete-ticket border-0 bg-transparent">
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </div>
            </div>
        </div>
    </div>


    @push('scripts')
    <script>
    </script>
    <script src="https://kit.fontawesome.com/965753faab.js" crossorigin="anonymous"></script>


    @endpush

    @endsection