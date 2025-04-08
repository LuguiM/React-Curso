const { response } = require('express');
const Evento = require('../models/Evento')

const getEventos = async (req, res = response) => {

    const eventos = await Evento.find()
        .populate('user', 'name');

    return res.status(200).json({
        ok: true,
        eventos
    })
}

const crearEvento = async (req, res = response) => {

    const evento = new Evento(req.body);

    try {
        evento.user = req.uid;
        const eventoGuardado = await evento.save()

        return res.status(201).json({
            ok: true,
            msg: 'Evento creado',
            evento: eventoGuardado
        })

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error al crear el evento'
        })
    }

}

const actualizarEvento = async (req, res = response) => {

    const eventoId = req.params.id;
    const uid = req.uid;

    try {

        const evento = await Evento.findById(eventoId);

        if(!evento) {
            return res.status(404).json({
                ok: false,
                msg: "El evento no existe"
            })
        }

        if(evento.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No puede editar este evento'
            })
        }   

        const nuevoEvento = {
            ...req.body,
            user: uid
        }

        const eventoActualizado = await Evento.findByIdAndUpdate( eventoId, nuevoEvento, { new: true } )

        return res.status(201).json({
            ok: true,
            msg: 'Evento actualizado',
            evento: eventoActualizado
        })

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error al actualizar el evento'
        })
    }
}

const eliminarEvento = async (req, res = response) => {
    const eventoId = req.params.id;
    const uid = req.uid;

    try {

        const evento = await Evento.findById(eventoId);

        if(!evento) {
            return res.status(404).json({
                ok: false,
                msg: "El evento no existe"
            })
        }

        if(evento.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No puede eliminar este evento'
            })
        }   

        await Evento.findByIdAndDelete( eventoId )

        return res.status(201).json({
            ok: true,
            msg: 'Evento eliminado'
        })

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error al actualizar el evento'
        })
    }
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}