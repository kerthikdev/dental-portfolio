import React, { useState } from 'react';
import { Printer, CheckCircle2, Copy, ArrowRight, ExternalLink, ShieldCheck, CreditCard, Sparkles, Smartphone } from 'lucide-react';

export default function InvoicePage({ onPreviewWebsite }) {
  const [copied, setCopied] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const upiDetails = {
    pa: 'kerthik087@okaxis',
    pn: 'Kerthik S',
    am: '149',
    cu: 'INR',
    tn: 'SivaToothCareWebsite'
  };

  const upiString = `upi://pay?pa=${upiDetails.pa}&pn=${encodeURIComponent(upiDetails.pn)}&am=${upiDetails.am}&cu=${upiDetails.cu}&tn=${encodeURIComponent(upiDetails.tn)}`;

  const payViaUpi = (app) => {
    let targetUrl = upiString;

    if (app === 'gpay') {
      targetUrl = `gpay://upi/pay?pa=${upiDetails.pa}&pn=${encodeURIComponent(upiDetails.pn)}&am=${upiDetails.am}&cu=${upiDetails.cu}&tn=${encodeURIComponent(upiDetails.tn)}`;
    } else if (app === 'phonepe') {
      targetUrl = `phonepe://pay?pa=${upiDetails.pa}&pn=${encodeURIComponent(upiDetails.pn)}&am=${upiDetails.am}&cu=${upiDetails.cu}&tn=${encodeURIComponent(upiDetails.tn)}`;
    } else if (app === 'paytm') {
      targetUrl = `paytmmp://pay?pa=${upiDetails.pa}&pn=${encodeURIComponent(upiDetails.pn)}&am=${upiDetails.am}&cu=${upiDetails.cu}&tn=${encodeURIComponent(upiDetails.tn)}`;
    }

    // Trigger URL
    window.location.href = targetUrl;

    const a = document.createElement('a');
    a.href = targetUrl;
    a.click();

    showToast('Redirecting to UPI app (or scan QR on desktop)...');
  };

  const copyUpiId = () => {
    navigator.clipboard.writeText('kerthik087@okaxis').then(() => {
      setCopied(true);
      showToast('✅ UPI ID (kerthik087@okaxis) copied to clipboard!');
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3500);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-center items-center p-3 sm:p-6 text-slate-900 font-sans">
      
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed top-4 z-50 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-2xl animate-bounce">
          {toastMsg}
        </div>
      )}

      {/* Main Invoice Card */}
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="bg-slate-950 text-white px-5 sm:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-200">Official Payment Invoice • Kerthik S</span>
          </div>

          <div className="flex items-center gap-2">
            {onPreviewWebsite && (
              <button 
                onClick={onPreviewWebsite}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-bold transition-all flex items-center gap-1.5"
              >
                <span>View Dental Site</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            )}
            <button 
              onClick={() => window.print()}
              className="px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-all shadow flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
          </div>
        </div>

        <div className="p-5 sm:p-8 space-y-5 sm:space-y-6">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-slate-100 pb-4">
            <div>
              <span className="inline-block px-2.5 py-0.5 bg-sky-100 text-sky-800 text-[10px] font-extrabold rounded-md uppercase tracking-wider mb-1.5">
                TAX INVOICE
              </span>
              <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 leading-tight">
                Kerthik S
              </h1>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Web Development & Technical Support</p>
              <div className="text-xs text-slate-600 mt-1.5 space-y-0.5">
                <div><strong>Email:</strong> kerthik.cse2019@gcedpi.edu.in</div>
                <div><strong>UPI ID:</strong> <span className="font-mono text-sky-700 font-bold">kerthik087@okaxis</span></div>
              </div>
            </div>

            <div className="text-left sm:text-right text-xs space-y-1">
              <div className="font-extrabold text-sm text-slate-900">Invoice: <span className="text-sky-600 font-mono">#INV-2026-001</span></div>
              <div className="text-slate-500">Date: <strong className="text-slate-700">29 August 2026</strong></div>
              <div><span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold text-[10px]">Payment Due</span></div>
            </div>
          </div>

          {/* Billed To Card */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <span className="text-slate-400 font-bold uppercase tracking-wider block text-[10px] mb-0.5">Billed To:</span>
              <h3 className="text-xs font-extrabold text-slate-900">Dr. Kiran Kumar / Siva Tooth Care</h3>
              <p className="text-slate-600 text-[11px] mt-0.5">New Muruga Complex, Thattanchavadi</p>
              <p className="text-slate-600 text-[11px]">Karuppur, Salem, Tamil Nadu – 636012</p>
              <p className="text-slate-600 text-[11px] mt-0.5">Phone: 79040 91317</p>
            </div>

            <div>
              <span className="text-slate-400 font-bold uppercase tracking-wider block text-[10px] mb-0.5">Service Details:</span>
              <h3 className="text-xs font-bold text-slate-900">Siva Tooth Care Website</h3>
              <p className="text-slate-600 text-[11px] mt-0.5">Domain Setup & Monthly Maintenance</p>
              <p className="text-slate-600 text-[11px]">Settlement: Instant UPI Transfer</p>
            </div>
          </div>

          {/* Line Items Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-extrabold uppercase tracking-wider text-[10px]">
                  <th className="py-2 px-2">#</th>
                  <th className="py-2 px-2">Description</th>
                  <th className="py-2 px-2 text-center">Qty</th>
                  <th className="py-2 px-2 text-right">Rate</th>
                  <th className="py-2 px-2 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-3 px-2 font-bold text-slate-400 text-[11px]">01</td>
                  <td className="py-3 px-2">
                    <div className="font-bold text-slate-900 text-xs">Custom Domain Setup & Configuration</div>
                    <div className="text-[11px] text-slate-500">Domain purchase, DNS linking & SSL security</div>
                  </td>
                  <td className="py-3 px-2 text-center font-bold text-[11px]">1</td>
                  <td className="py-3 px-2 text-right font-medium text-[11px]">₹99.00</td>
                  <td className="py-3 px-2 text-right font-bold text-slate-900 text-[11px]">₹99.00</td>
                </tr>
                <tr>
                  <td className="py-3 px-2 font-bold text-slate-400 text-[11px]">02</td>
                  <td className="py-3 px-2">
                    <div className="font-bold text-slate-900 text-xs">Website Maintenance & Technical Tuning</div>
                    <div className="text-[11px] text-slate-500">Mobile optimization, Google Maps pin fix & content updates</div>
                  </td>
                  <td className="py-3 px-2 text-center font-bold text-[11px]">1</td>
                  <td className="py-3 px-2 text-right font-medium text-[11px]">₹50.00</td>
                  <td className="py-3 px-2 text-right font-bold text-slate-900 text-[11px]">₹50.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Payment Details & QR Code Section */}
          <div className="border-t border-slate-200 pt-4 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            
            {/* Left Column: QR Code & Launch Buttons */}
            <div className="sm:col-span-6 bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col items-center text-center space-y-2.5">
              
              <div className="flex items-center gap-3">
                <div className="w-28 h-28 bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center shrink-0">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi%3A%2F%2Fpay%3Fpa%3Dkerthik087%40okaxis%26pn%3DKerthik%2520S%26am%3D149%26cu%3DINR%26tn%3DSivaToothCareWebsite" 
                    alt="UPI QR Code - Kerthik S" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="text-left text-xs space-y-1">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Scan & Pay</div>
                  <div className="font-mono font-bold text-slate-900 text-xs">kerthik087@okaxis</div>
                  <button 
                    onClick={copyUpiId}
                    className="text-[10px] px-2.5 py-1 rounded-lg bg-sky-100 hover:bg-sky-200 text-sky-800 font-bold transition-colors inline-flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copied ? 'Copied!' : 'Copy UPI ID'}</span>
                  </button>
                </div>
              </div>

              {/* Main UPI Action Button */}
              <div className="w-full space-y-1.5 pt-1">
                <button
                  onClick={() => payViaUpi('universal')}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                >
                  <Smartphone className="w-4 h-4 shrink-0" />
                  <span>👉 Pay ₹149 in any UPI App</span>
                </button>

                {/* Direct App Launchers */}
                <div className="grid grid-cols-3 gap-1.5 text-[10px] font-bold">
                  <button 
                    onClick={() => payViaUpi('gpay')} 
                    className="py-1.5 px-1 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 shadow-sm active:scale-95 transition-all"
                  >
                    Google Pay
                  </button>
                  <button 
                    onClick={() => payViaUpi('phonepe')} 
                    className="py-1.5 px-1 rounded-xl bg-white border border-slate-200 text-purple-700 hover:bg-purple-50 shadow-sm active:scale-95 transition-all"
                  >
                    PhonePe
                  </button>
                  <button 
                    onClick={() => payViaUpi('paytm')} 
                    className="py-1.5 px-1 rounded-xl bg-white border border-slate-200 text-sky-700 hover:bg-sky-50 shadow-sm active:scale-95 transition-all"
                  >
                    Paytm
                  </button>
                </div>
              </div>

            </div>

            {/* Right Column: Breakdown & Total */}
            <div className="sm:col-span-6 space-y-2.5 text-xs">
              <div className="flex justify-between text-slate-600 text-[11px]">
                <span>Domain Setup:</span>
                <span className="font-bold text-slate-900">₹99.00</span>
              </div>
              <div className="flex justify-between text-slate-600 text-[11px]">
                <span>Monthly Maintenance:</span>
                <span className="font-bold text-slate-900">₹50.00</span>
              </div>
              <div className="flex justify-between text-slate-600 text-[11px]">
                <span>GST / Taxes:</span>
                <span className="font-bold text-slate-900">₹0.00</span>
              </div>

              <div className="border-t border-slate-200 pt-2 flex justify-between items-baseline">
                <div>
                  <div className="text-xs font-extrabold text-slate-900">Total Amount Due</div>
                  <div className="text-[10px] text-slate-400">One Hundred Forty-Nine Rupees</div>
                </div>
                <div className="text-3xl font-extrabold text-sky-600">
                  ₹149.00
                </div>
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-800 space-y-0.5">
                <div className="font-bold">Payment Note:</div>
                <div>Tap the button or scan QR to settle directly via UPI to <strong className="font-mono">kerthik087@okaxis</strong>.</div>
              </div>
            </div>

          </div>

          {/* Footer Note */}
          <div className="border-t border-slate-100 pt-3 text-center text-[11px] text-slate-400">
            Thank you for your business! • Kerthik S (kerthik.cse2019@gcedpi.edu.in)
          </div>

        </div>
      </div>

    </div>
  );
}
