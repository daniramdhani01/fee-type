import { useEffect, useState } from 'react'
import { Container, Table, Form, Badge, Button } from 'react-bootstrap'
import "datatables.net-dt/css/jquery.dataTables.min.css"
import "jquery-datatables-checkboxes"
import $ from 'jquery';

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { data } from '../assets/dummydata/data'

// icon
import pencil from "../assets/icons/pencil.svg"
import trash from "../assets/icons/trash.svg"
import eye from "../assets/icons/eye.svg"
import arrow from "../assets/icons/double-down.svg"
import arrowback from "../assets/icons/arrow_back.svg"
import printer from "../assets/icons/printer.svg"
import download from "../assets/icons/download.svg"
import cnew from "../assets/icons/create-new.svg"
import reload from "../assets/icons/reload.svg"

export default function LandingPage() {
    const [state, setState] = useState(null)
    const [isactive, setisactive] = useState(false)
    const [style, setStyle] = useState({
        "rotate": "rotate-icon",
        "show": "-show"
    })

    const back = () => {
        return (
            <div>
                <img src={arrow} alt="#" />
            </div>
        )
    }
    const forward = <img src={arrowback} alt="#" />


    useEffect(() => {
        if (isactive) {
            setStyle({
                "rotate": "rotate-icon",
                "show": "-show"
            })
        } else {
            setStyle({
                "rotate": "",
                "show": ""
            })

        }
    }, [isactive])

    useEffect(() => {
        setState(data)
        return (
            () => setState(null)
        )
    }, [])

    $(document).ready(function () {
        const table = $('#example').DataTable({
            'columnDefs': [
                {
                    'targets': 0,
                    'checkboxes': {
                        'selectRow': true
                    }
                }
            ],
            dom: '<"top">rt<"bottom"lip><"clear">',
            "language": {
                "lengthMenu": "_MENU_",
                "info": "Showing _START_ - _END_ Of _MAX_",
                "paginate": {
                    "first": "First",
                    "last": "Last",
                    "previous": back,
                    "next": forward,
                },
            },
            pagingType: 'simple_numbers',
            destroy: true
        });

        $('#create-new').on('click', () => {
            const dataselect = table.columns.checkboxes.selected()[0];
            $.each(dataselect, (index, id) => {
                const newdata = $(id).value
                console.log(newdata)
            })

        })

        $('#myInputTextField').on('keyup', function () {
            table.search(this.value).draw();
        });

        $('#table-filter').on('change', function () {
            let regExSearch = '^' + this.value + '$';
            if (this.value === "All") {
                regExSearch = '.*';
            }
            table.columns(4).search(regExSearch, true, false).draw();
        });


    });

    return (
        <div className="d-flex flex-row">
            <Sidebar />
            <div className="d-flex flex-column w-100">
                <Header />
                <Container fluid className="px-5 pb-4">
                    {!state ? <div>Prosesing..</div> :
                        <div>
                            <section className='d-flex flex-row mt-3'>
                                <div className='d-flex flex-row align-items-center w-100'>
                                    <Form.Control type="text" id="myInputTextField" placeholder="Search..." className='dt-search me-3' />
                                    <strong className='pointer dt-adv-arrow' onClick={() => setisactive(!isactive)}>
                                        Advance Options <img src={arrow} alt="#" className={style.rotate} />
                                    </strong>
                                </div>
                                <div className='w-100 d-flex justify-content-end align-items-center'>
                                    <Badge bg="secondary" pill className="p-2 rounded-circle" >
                                        <img src={printer} alt="#" className='pointer' id='print' />
                                    </Badge>
                                    <Badge bg="secondary" pill className="p-2 rounded-circle mx-2">
                                        <img src={download} alt="#" className='pointer' id="export" />
                                    </Badge>
                                    <Button variant="warning" id="create-new">
                                        <img src={cnew} alt="#" className='me-1' />
                                        Create New
                                    </Button>
                                </div>
                            </section>
                            <div className={"rounded mt-2 py-2 px-3 dt-status-filter" + style.show}>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h5>Status</h5>
                                    <Badge bg="secondary" pill className="p-2 rounded-circle">
                                        <img src={reload} alt="#" style={{ color: "white" }} className="pointer" />
                                    </Badge>
                                </div>
                                <Form.Select style={{ width: "120px" }} id="table-filter">
                                    <option value="All">All</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </Form.Select>
                            </div>

                            <Table responsive striped bordered hover id='example' className="display mt-3" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th style={{ width: "13%" }}>Fee Type Code</th>
                                        <th>Fee Type Name</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {state.map((value, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{value.id}</td>
                                                <td className='align-middle text-center'>{value.id}</td>
                                                <td>{value.title}</td>
                                                <td>{value.body}</td>
                                                <td className='align-middle text-center'>{value.status}</td>
                                                <td className='align-middle text-center' style={{ width: "9%" }}>
                                                    <img src={pencil} alt="#" className="tb-icon" />
                                                    <img src={eye} alt="#" className="tb-icon" />
                                                    <img src={trash} alt="#" className="tb-icon" />
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </div>}
                </Container>
            </div>
        </div >
    )
}