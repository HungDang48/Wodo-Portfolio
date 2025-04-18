import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { phases } from "../../data/phasesData.js"
import { motion } from 'framer-motion'
import { ChevronLeft, Clock, BookOpen } from 'lucide-react'

export default function PhaseDetail() {
  const { phaseId } = useParams()
  const navigate = useNavigate()
  const phase = phases[Number(phaseId)]

  if (!phase) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-red-600 mb-2">Không tìm thấy</h2>
        <p className="text-gray-600 mb-4">Giai đoạn không tồn tại.</p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Quay lại
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-blue-100 to-transparent opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-full h-40 bg-gradient-to-t from-indigo-100 to-transparent opacity-70"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back button */}
        <motion.button
          onClick={() => navigate(-1)}
          className="group mb-6 flex items-center text-blue-600 hover:text-blue-800 font-medium"
          whileHover={{ x: -4 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <ChevronLeft className="mr-1 w-5 h-5" />
          <span>Quay lại</span>
        </motion.button>

        <motion.div
          className="bg-white rounded-xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero image */}
          <div className="relative h-80">
            <img
              src={phase.img}
              alt={phase.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <motion.h1 
              className="absolute bottom-6 left-8 text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {phase.title}
            </motion.h1>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Meta info */}
            <div className="flex items-center space-x-6 mb-8 text-gray-500">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Phần {Number(phaseId) + 1}/{phases.length}</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                <span>{phase.sections.length} mục</span>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {phase.sections.map((sec, index) => (
                <motion.div
                  key={sec.title}
                  className="border-l-4 border-blue-500 pl-6 py-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <h2 className="text-2xl font-semibold mb-3 text-gray-800">{sec.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{sec.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Navigation footer */}
        <motion.div 
          className="mt-8 flex justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {Number(phaseId) > 0 && (
            <button 
              onClick={() => navigate(`/phases/${Number(phaseId) - 1}`)}
              className="px-5 py-2 bg-white text-blue-600 rounded-lg shadow hover:shadow-md transition-shadow flex items-center"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Giai đoạn trước
            </button>
          )}
          
          <div className="flex-1"></div>
          
          {Number(phaseId) < phases.length - 1 && (
            <button 
              onClick={() => navigate(`/phases/${Number(phaseId) + 1}`)}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:shadow-md transition-shadow flex items-center"
            >
              Giai đoạn tiếp theo
              <ChevronLeft className="w-4 h-4 ml-1 rotate-180" />
            </button>
          )}
        </motion.div>
      </div>

      {/* Background pattern */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 150, ease: "linear" }}
      >
        <img src="/assets/pattern.svg" alt="" className="w-full h-full object-cover opacity-3" />
      </motion.div>
    </div>
  )
}