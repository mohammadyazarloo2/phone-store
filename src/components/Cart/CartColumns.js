import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"></p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">عنوان محصول</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">قیمت</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">تعداد</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">حذف</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">جمع کل</p>
                </div>
            </div>
        </div>
    )
}
