import React from 'react'

const All = () => {
  return (
    <div>
      <section class="intro mt-5">
        <div class="gradient-custom-2 h-100">
            <div class="mask d-flex align-items-center h-100">
            <div class="container">
                <div class="row justify-content-center">
                <div class="col-12">
                    <div class="table-responsive">
                    <table class="table table-bordered mb-0">
                        <thead class="bg-dark text-white">
                        <tr>
                            <th scope="col">DISTRICT</th>
                            <th scope="col">AREA</th>
                            <th scope="col">COMPLAINT NO.</th>
                            <th scope="col">DEPARTMENT</th>
                            <th scope="col">DATE</th>   
                            <th scope="col">STATUS</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">Kottayam</th>
                            <td>abcd</td>
                            <td>56293</td>
                            <td>Water</td>
                            <td>29/10/2022</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <th scope="row">Prayagraj</th>
                            <td>fged</td>
                            <td>56893</td>
                            <td>Electricity</td>
                            <td>29/10/2021</td>
                            <td>Solved</td>
                        </tr>
                        <tr>
                            <th scope="row">Varanasi</th>
                            <td>femd</td>
                            <td>45338</td>
                            <td>Municipal</td>
                            <td>19/05/2022</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <th scope="row">Delhi</th>
                            <td>kwmd</td>
                            <td>78239</td>
                            <td>Administration</td>
                            <td>29/10/2022</td>
                            <td>Solved</td>
                        </tr>
                        <tr>
                            <th scope="row">Patna</th>
                            <td>qbfue</td>
                            <td>96348</td>
                            <td>Water</td>
                            <td>10/05/2020</td>
                            <td>Solved</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default All
