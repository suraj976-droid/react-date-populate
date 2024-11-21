 		<div className="col-md-3">
                    <label className="input-field">Contract Activation Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="contract_activation_date"
                      value={formData.contract_activation_date ? formData.contract_activation_date.split('T')[0] : ''}
                      onChange={handleChange}
                    />
                  </div>